import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Packs({
  data, path // this prop will be injected by the GraphQL query below.
}) {
  const { packs } = data;
  let language = path.split("/")[1];

  return (
    <Layout language={language}>
      <SEO title={`All Packs`} description={`List of all packs. Choose a assistive card pack to list the cards from that category.`}/>
      <div className="content">
        <h1>All Packs</h1>
        <p style={{opacity: 0.6}}>List of all packs. Choose a assistive card pack to list the cards from that category.</p>
        <div className="categories">
          {packs.edges.map(pack => {
            if(pack.node.locale[language]){
              return (
                <Link to={`/${language}/pack/${pack.node.slug}/`} key={pack.node.slug}>
                  <div className="categoryItem" style={{backgroundColor: pack.node.color}}>
                    <img src={`https://api.assistivecards.com/cards/icon/${pack.node.slug}.png`} style={{width: 100, height: 100}} alt={`${pack.node.locale[language]} pack category`}/>
                    <p>{pack.node.locale[language]}</p>
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
  query{
    packs: allPack{
      edges {
        node {
          slug
          color
          count
          id
          locale {
            en
          }
        }
      }
    }
  }
`
