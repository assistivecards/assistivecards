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

  const lang = await pullCacheable(cache, `languages`);

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
    cards.en.map((card, i) => {
      // Create your node object

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
        id: `Card-${i}`,
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
      createNode(node);
    });
  }


/*
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const categoryTemplate = require.resolve(`./src/templates/category.js`)
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
*/


exports.onPostBuild = async ({ cache }) => {
  await cache.set(`key`, `value`)
  const cachedValue = await cache.get(`key`)
  console.log(cachedValue) // logs `value`
}
