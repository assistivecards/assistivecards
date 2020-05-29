import React from "react"
import { Link, navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Screenshot1 from "../components/screenshot1"
import Screenshot2 from "../components/screenshot2"
import Screenshot3 from "../components/screenshot3"


class IndexPage extends React.Component {
  constructor(){
    super();
    if(typeof window != "undefined"){
      window.location.href = "https://docs.google.com/spreadsheets/d/1GLlynWABSzuh_paSCcFdzoPiknpLXnavJDwa-1e73ag/edit#gid=0" ;
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
