import React from "react"
import { Link, navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  constructor(){
    super();
    if(typeof window != "undefined"){
      navigate("/blog/samsung-tts-issue");
    }
  }

  render(){
    return (
      <>
      </>
    )
  }
}

export default IndexPage
