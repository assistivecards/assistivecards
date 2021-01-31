const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)
const axios = require('axios');
const crypto = require('crypto');
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 const ONLY_RENDER_EN = true;

async function pullCacheable(cache, key){
  const cachedValue = await cache.get(key);
  if(cachedValue){
    console.log("CachedPull", key);
    return cachedValue;
  }else{
    console.log("Pulling", key);
    const url = `https://api.assistivecards.com/${key}.json`;
    const data = (await axios.get(url)).data;
    await cache.set(key, data);
    return data;
  }
}

exports.sourceNodes = async ({ actions, cache }) => {
  const { createNode } = actions;

  let lang = {};

  if(ONLY_RENDER_EN){
    lang = {languages: [{code: "en"}]};
  }else{
    lang = await pullCacheable(cache, `languages`)
  }

  await sourceLang(lang, createNode);
  await sourcePacks(lang, createNode, cache);
  //return;
}

async function sourceLang(langs, createNode){

  langs.languages.map((lang, i) => {

    const node = {
      id: `Lang-${i}`,
      parent: `__SOURCE__`,
      internal: {
        type: `Lang`,
      },
      children: [],

      code: lang.code,
      locale: lang.locale,
      support: lang.support,
      title: lang.title,
      title: lang.title,
      native: lang.native,
      rightToLeft: lang.rightToLeft,
      readproof: lang.readproof
    }

    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(node))
      .digest(`hex`);
    // add it to userNode
    node.internal.contentDigest = contentDigest;

    createNode(node);
  });
}



async function sourcePacks(lang, createNode, cache){
  let packs = {};

  for (var i = 0; i < lang.languages.length; i++) {
    let l = lang.languages[i];
    packs[l.code] = await pullCacheable(cache, `packs/${l.code}/metadata`);
  }

  // map into these results and create nodes
  packs.en.map((pack, i) => {
    // Create your node object

    let locale = {};
    Object.values(lang.languages).forEach((lan, x) => {
      locale[lan.code] = packs[lan.code].filter(p => p.id == pack.id)[0].locale;
    });

    const node = {
      // Required fields
      id: `Pack-${pack.id}`,
      parent: `__SOURCE__`,
      internal: {
        type: `Pack`, // This is an important indicator for your data node.
      },
      children: [],

      // Other fields that you want to query with graphQl
      slug: pack.slug,
      color: pack.color,
      count: pack.count,
      locale: locale
    }

    // Get content digest of node. (Required field)
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(node))
      .digest(`hex`);
    // add it to userNode
    node.internal.contentDigest = contentDigest;

    // Create node with the gatsby createNode() API
    createNode(node);
  });

  for (var i = 0; i < packs.en.length; i++) {
    let pack = packs.en[i];
    await sourceCards(pack.slug, lang, createNode, cache);
  }
}

async function sourceCards(slug, lang, createNode, cache){
    let cards = {};
    console.log("Sourcing Card", slug);
    for (var i = 0; i < lang.languages.length; i++) {
      let l = lang.languages[i];
      cards[l.code] = await pullCacheable(cache, `packs/${l.code}/${slug}`);
    }

    // map into these results and create nodes
    for (var i = 0; i < cards.en.length; i++) {
      let card = cards.en[i]

      let locale = {};
      Object.values(lang.languages).forEach((lan, x) => {
        try{
          locale[lan.code] = {
            title: cards[lan.code].filter(c => c.slug == card.slug)[0].title,
            phrases: cards[lan.code].filter(c => c.slug == card.slug)[0].phrases,
          }
        }catch (err) {
          console.log(lan.code)
        }
      });

      const node = {
        // Required fields
        id: `Card-${slug}-${i}`,
        parent: `__SOURCE__`,
        internal: {
          type: `Card`, // This is an important indicator for your data node.
        },
        children: [],

        // Other fields that you want to query with graphQl
        slug: card.slug,
        pack: slug,
        locale: locale
      }

      // Get content digest of node. (Required field)
      const contentDigest = crypto
        .createHash(`md5`)
        .update(JSON.stringify(node))
        .digest(`hex`);
      // add it to userNode
      node.internal.contentDigest = contentDigest;
      // Create node with the gatsby createNode() API
      await createNode(node);
    }
  }



exports.createPages = async ({ actions, graphql, reporter, cache }) => {
  const { createPage } = actions


  const packsTemplate = require.resolve(`./src/templates/packs.js`)

  if(ONLY_RENDER_EN){
    lang = {languages: [{code: "en"}]};
  }else{
    lang = await pullCacheable(cache, `languages`)
  }


  for (var i = 0; i < lang.languages.length; i++) {
    let l = lang.languages[i];

    createPage({
      path: `/${l.code}/packs/`,
      component: packsTemplate
    })
  }


  const packTemplate = require.resolve(`./src/templates/pack.js`)
  const packResult = await graphql(`
    {
      allPack(
        limit: 1000
      ) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  // Handle errors
  if (packResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  packResult.data.allPack.edges.forEach(({ node }) => {

    for (var i = 0; i < lang.languages.length; i++) {
      let l = lang.languages[i];

      createPage({
        path: `/${l.code}/pack/${node.slug}/`,
        component: packTemplate,
        context: {
          // additional data can be passed via context
          slug: node.slug
        },
      })
    }

  })


  const cardTemplate = require.resolve(`./src/templates/card.js`)
  const cardResult = await graphql(`
    {
      allCard (
        limit: 10000
      ) {
        edges {
          node {
            pack
            slug
          }
        }
      }
    }
  `)
  // Handle errors
  if (cardResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  cardResult.data.allCard.edges.forEach(({ node }) => {

    for (var i = 0; i < lang.languages.length; i++) {
      let l = lang.languages[i];

      createPage({
        path: `/${l.code}/card/${node.pack}/${node.slug}/`,
        component: cardTemplate,
        context: {
          // additional data can be passed via context
          pack: node.pack,
          slug: node.slug
        },
      })
    }

  })

  const blogPostTemplate = require.resolve(`./src/templates/blog.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: blogPostTemplate,
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug,
      },
    })
  })
}


exports.onPostBuild = async ({ cache }) => {
  await cache.set(`key`, `value`)
  const cachedValue = await cache.get(`key`)
  console.log(cachedValue) // logs `value`
}
