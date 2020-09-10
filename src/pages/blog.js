import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Screenshot1 from "../components/screenshot1"
import Screenshot2 from "../components/screenshot2"
import Screenshot3 from "../components/screenshot3"


class IndexPage extends React.Component {
  state = {

  }

  render(){
    return (
      <Layout>
        <SEO title="Blog Posts - Assistive Cards" description="Helps non-verbal kids to communicate with their parents, teachers and friends."/>

        <div className="section">
          <p>Test</p>
        </div>

      </Layout>
    )
  }
}

export default IndexPage
