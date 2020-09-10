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
      <SEO title={`Packs`} description={`Project description for `}/>
      <div className="content">
        <h1>All Pack {language}</h1>
        <p style={{opacity: 0.6}}>Get assistive cards related to all</p>
        <div className="categories">
          {packs.edges.map(pack => {
            return (
              <Link to={`/${language}/pack/${pack.node.slug}/`} key={pack.node.slug}>
                <div className="categoryItem" style={{backgroundColor: pack.node.color}}>
                  <img src={`https://api.assistivecards.com/cards/icon/${pack.node.slug}.png`} style={{width: 100, height: 100}}/>
                  <p>{pack.node.locale[language]} ({pack.node.count})</p>
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
