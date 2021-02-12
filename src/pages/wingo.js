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
                  <img src={require("../images/wingo/wingo.png")} style={{width: 100, height: 100, marginBottom: 25, boxShadow: "0px 0px 5px 1px rgba(99, 110, 181, 0.4)", borderRadius: "50%"}}/>

                  <h1 style={{fontSize: 38}}>Plan your childs day with<br/>
                  Wingo App</h1>

                  <p style={{fontSize: 23}}>Plan your children's day and communicate their tasks better and easier.</p>

                  <div className="download">
                    <p to="/wingo/" style={{color: "#636eb5"}}>Coming Soon</p>
                  </div>
                </div>
              </div>

            </Layout>
        )
    }
}
