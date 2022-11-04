import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Screenshot1 from "../components/screenshot1"
import Screenshot2 from "../components/screenshot2"
import Screenshot3 from "../components/screenshot3"

export default class Wingo extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Chamur - Find in house items." description="Helps non-verbal kids to communicate with their parents, teachers and friends." />

        <div className="section">
          <div className="sectionDescription right">
            <img src={require("../images/chamur/chamur.png")} style={{ width: 100, height: 100, marginBottom: 25, boxShadow: "0px 0px 5px 1px rgba(99, 110, 181, 0.4)", borderRadius: "50%" }} />

            <h1 style={{ fontSize: 38 }}>Find in house items with<br />
              Chamur App</h1>

            <p style={{ fontSize: 23 }}>An educational scavenger hunt game that uses object recognition via device camera, and its power.</p>

            <div className="download">
              <p to="/chamur/" style={{ color: "#63b580" }}>Coming Soon</p>
            </div>
          </div>
        </div>

      </Layout>
    )
  }
}
