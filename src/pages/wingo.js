import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Screenshot1 from "../components/screenshot1"
import Screenshot2 from "../components/screenshot2"
import Screenshot3 from "../components/screenshot3"

export default class Wingo extends React.Component{
    render(){
        return(
            <Layout>
                <SEO title="Wingo - Daily planner for kids." description="Helps non-verbal kids to communicate with their parents, teachers and friends." />

                <div className="section">
          <div className="sectionDescription right">
            <img src={require("../images/wingo/wingo.png")} style={{width: 100, height: 100, marginBottom: 25}}/>

            <h1 style={{fontSize: 38}}>Plan your childs day with<br/>
            Wingo App</h1>

            <p style={{fontSize: 23}}></p>

            <div className="download">
              <a href="" target="_blank">
                <img src={require("../images/as.svg")} />
              </a>
              <a href="" target="_blank">
                <img src={require("../images/gp.svg")} />
              </a>
            </div>
          </div>

          <div className="sectionImage right">
            <div className="sectionBackground right">
              <img src={require("../images/blob.svg")} className="blob right"/>
              <img src={require("../images/particals.svg")} className="particals right"/>
            </div>
          </div>
        </div>

            </Layout>
        )
    }
}