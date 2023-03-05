import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Packs({
  data, path // this prop will be injected by the GraphQL query below.
}) {
  const { games } = data;
  let language = path.split("/")[1];

  return (
    <Layout language={language}>
      <SEO title="Assistive Games" description="See the games made with assistive cards library, the games we made and keeping updates." />
      <div className="content">
        <h2>Assistive Games</h2>
        <p>See the games made with assistive cards library, the games we made and keeping updates, we will also list games you are or will make at this page.</p>
        <div className="apps" style={{ width: "100%", margin: "auto" }}>
          {games.edges.map((game, i) => {
            return (
              <div className="app" key={i}>
                <img src={`https://api.assistivecards.com/games/icon/${game.node.slug}@0.5x.png`} style={{ boxShadow: "0px 0px 5px 1px rgba(99, 178, 181, 0.4)", borderRadius: "15%", marginBottom: 10 }} />
                <div className="appContent" style={{paddingTop: 0}}>
                  <h1>{game.node.name}</h1>
                  <p style={{marginBottom: 10}}>{game.node.tagline}</p>
                  <div className="download" style={{marginBottom: 0, opacity: game.node.released ? 1 : 0.1}}>
                    <a href={game.node.released ? `https://apps.apple.com/app/id${game.node.appStoreId}`: "#"} target="_blank">
                      <img src={require("../images/as.svg")} style={{height:40}}/>
                    </a>
                    <a href={game.node.released ? `https://play.google.com/store/apps/details?id=com.assistivecards.${game.node.slug}`: "#"} target="_blank">
                      <img src={require("../images/gp.svg")} style={{height:40}}/>
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query{
    games: allGame{
      edges {
        node {
          slug
          name
          tagline
          description
          playStoreId
          appStoreId
          released
          premium
        }
      }
    }
  }
`
