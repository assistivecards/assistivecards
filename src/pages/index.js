import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  state = {

  }

  render(){
    return (
      <>
        <SEO title="Assistive Cards - Free-to-use Open Licensed AAC Cards" description="Free-to-use Open Licensed AAC Cards"/>
        <div style={{display: "flex", justifyContent: "center", flexDirection: "column", padding: 30}}>
          <img src={require("../images/logo.svg")}/>
          <h1 style={{textAlign: "center", paddingTop: 30}}>Coming soon!</h1>

          <a href="/leeloo" style={{textAlign: "center"}}>Checkout Leeloo AAC!</a>
        </div>
      </>
    )
  }
}

export default IndexPage
