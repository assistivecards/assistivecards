import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import BreadCrumbs from "../components/breadcrumb"

export default function Template({
  data, path // this prop will be injected by the GraphQL query below.
}) {
  const { pack, cards } = data;
  let language = path.split("/")[1];

  return (
    <Layout language={language}>
      <SEO title={`${pack.locale[language]} Pack`} description={`Download free ${pack.locale[language]} assistive card in SVG or PNG format with JSON file of translation to 37 languages. Free vector ${pack.locale[language]} illustration and icon.`} image={`https://api.assistivecards.com/cards/icon/${pack.slug}.png`} />
      <div className="content">
      <BreadCrumbs links={[
            {title: "Home", link: "/"},
            {title: "Packs", link: `/${language}/packs`}
      ]} />
        <div style={{display: "flex", flexDirection: "row"}}>
          <div>
            <h1>{pack.locale[language]} Pack</h1>
            <p style={{opacity: 0.6}}>Download free {pack.locale[language]} assistive card in SVG or PNG format with JSON file of translation to 37 languages. Free vector {pack.locale[language]} illustration and icon.</p>
          </div>
          <img src={`https://api.assistivecards.com/cards/icon/${pack.slug}.png`} style={{width: 100, height: 100}} alt={`${pack.locale[language]} pack category`}/>
        </div>
        <div className="packs">
          {cards.edges.map(card => {
            if(card.node.locale[language]){
              return (
                <Link to={`/${language}/card/${pack.slug}/${card.node.slug}/`} key={card.node.slug}>
                  <div className="packItem">
                    <img src={`https://api.assistivecards.com/cards/${pack.slug}/${card.node.slug}.png`} style={{width: 90, height: 90}} alt={card.node.locale[language].title + " illustration"}/>
                    <p>{card.node.locale[language].title}</p>
                  </div>
                </Link>
              );
            }
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
        en
      }
    }
    cards: allCard(filter: {pack: {eq: $slug}}){
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
