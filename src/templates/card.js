import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import T from "../ui"


export default function Template({
  data, path // this prop will be injected by the GraphQL query below.
}) {
  const { pack, card, cards } = data;
  let language = path.split("/")[1];

  return (
    <Layout language={language}>
      <SEO title={`${card.locale[language].title} Card`} description={`Project description for ${card.locale[language].title}`}/>
      <div className="content">
        <div className="contentHolder">
          <div className="contentRight">
            <p style={{opacity: 0.6, margin: 0}}>{pack.locale[language]}</p>
            <h1>{card.locale[language].title} {T(language, "appName")}</h1>
            <p style={{opacity: 0.6}}>Download free {card.locale[language].title} assistive card in SVG or PNG format with JSON file of translation to 37 languages. Free vectoral {card.locale[language].title} illustration and icon.</p>
            <h3>Related Phrases</h3>
            <div>
              {card.locale[language].phrases.map((phrase, i) => {
                return (<p key={i}>{phrase.type} {phrase.phrase}</p>);
              })}
            </div>
          </div>

            <div className="contentLeft">
              <div className="contentCard">
                <img src={`https://api.assistivecards.com/cards/${card.pack}/${card.slug}@2x.png`} style={{width: 210, height: 210}} alt={`${card.locale[language].title} SVG, PNG Vector`}/>
              </div>
              <div className="downloads">
                <a href="">Download PNG</a>
                <a href="">Download SVG</a>
                <a href="">Translation JSON</a>
              </div>
            </div>
        </div>

        <h2>Cards from {pack.locale[language]} Pack</h2>
        <div className="packs">
          {cards.edges.map(relatedCard => {
            return (
              <Link to={`/${language}/card/${card.pack}/${relatedCard.node.slug}/`} key={relatedCard.node.slug}>
                <div className="packItem">
                  <img src={`https://api.assistivecards.com/cards/${card.pack}/${relatedCard.node.slug}.png`} style={{width: 90, height: 90}} alt={relatedCard.node.locale[language].title + " illustration"}/>
                  <p>{relatedCard.node.locale[language].title}</p>
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
  query($pack: String!, $slug: String!) {
    pack(slug: { eq: $pack }){
      slug
      color
      count
      id
      locale {
        en
      }
    }
    card(slug: { eq: $slug }, pack: { eq: $pack }) {
      slug
      pack
      id
      locale {
       en {
         title
         phrases {
           phrase
           type
         }
       }
      }
    }
    cards: allCard(filter: {pack: {eq: $pack}}){
     edges {
       node {
         slug
         id
         locale {
          en {
            title
          }
         }
       }
     }
   }
  }
`
