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
          {games.edges.map(game => {
            return <div>{game.node.name}</div>
          })}
          <div className="app">
              <img src={"https://api.assistivecards.com/games/icon/circle@0.5x.png"} style={{ boxShadow: "0px 0px 5px 1px rgba(99, 178, 181, 0.4)", borderRadius: "15%", marginBottom: 10 }} />
              <div className="appContent" style={{paddingTop: 0}}>
                <h1>Circle Objects Game</h1>
                <p style={{marginBottom: 10}}>Circle the right card by drawing on the device, improves kids' motor skills.</p>
                <div className="download" style={{marginBottom: 0}}>
                  <a href="https://apps.apple.com/us/app/draw-circles-learn-objects/id1668076300" target="_blank">
                    <img src={require("../images/as.svg")} style={{height:40}}/>
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.assistivecards.circle" target="_blank">
                    <img src={require("../images/gp.svg")} style={{height:40}}/>
                  </a>
                </div>
              </div>
          </div>
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
        }
      }
    }
  }
`
