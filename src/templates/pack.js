import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


export default function Template({
  data, path // this prop will be injected by the GraphQL query below.
}) {
  const { pack, cards } = data;
  let language = path.split("/")[1];

  return (
    <Layout language={language}>
      <SEO title={`${pack.locale[language]} Pack`} description={`Project description for ${pack.locale[language]}`}/>
      <div className="content">
        <img src={`https://api.assistivecards.com/cards/icon/${pack.slug}.png`} style={{width: 100, height: 100}}/>
        <h1>{pack.locale[language]} Pack</h1>
        <p style={{opacity: 0.6}}>Get assistive cards related to {pack.locale[language]}</p>
        <p style={{opacity: 0.6}}>Last edited at {pack.color}</p>
        <div className="packs">
          {cards.edges.map(card => {
            return (
              <Link to={`/${language}/card/${pack.slug}/${card.node.slug}/`} key={card.node.slug}>
                <div className="packItem">
                  <img src={`https://api.assistivecards.com/cards/${pack.slug}/${card.node.slug}.png`} style={{width: 90, height: 90}} alt={card.node.locale[language].title + " illustration"}/>
                  <p>{card.node.locale[language].title}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    pack(slug: { eq: $slug }) {
      slug
      color
      count
      id
      locale {
        ar
        bn
        cs
        de
        da
        en
        el
        es
        et
        fi
        fil
        fr
        he
        hi
        hu
        id
        it
        ja
        jv
        km
        ko
        nb
        ne
        nl
        pl
        pt
        ro
        ru
        si
        sk
        sv
        th
        tr
        uk
        ur
        vi
        zh
      }
    }
    cards: allCard(filter: {pack: {eq: $slug}}){
     edges {
       node {
         slug
         id
         locale {
          ar {
            title
          }
          bn {
            title
          }
          cs {
            title
          }
          de {
            title
          }
          da {
            title
          }
          en {
            title
          }
          el {
            title
          }
          es {
            title
          }
          et {
            title
          }
          fi {
            title
          }
          fil {
            title
          }
          fr {
            title
          }
          he {
            title
          }
          hi {
            title
          }
          hu {
            title
          }
          id {
            title
          }
          it {
            title
          }
          ja {
            title
          }
          jv {
            title
          }
          km {
            title
          }
          ko {
            title
          }
          nb {
            title
          }
          ne {
            title
          }
          nl {
            title
          }
          pl {
            title
          }
          pt {
            title
          }
          ro {
            title
          }
          ru {
            title
          }
          si {
            title
          }
          sk {
            title
          }
          sv {
            title
          }
          th {
            title
          }
          tr {
            title
          }
          uk {
            title
          }
          ur {
            title
          }
          vi {
            title
          }
          zh {
            title
          }
         }
       }
     }
   }
  }
`
