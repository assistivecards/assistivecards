import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"
import SEO from "../components/seo"
import T from "../ui"


export default function Template({
  data, path // this prop will be injected by the GraphQL query below.
}) {

  return (
    <Layout language={"en"} noHeader={true}>
      <SEO title="Assistive Cards - AAC Cards Illustrations and Phrases" description="Assistive Cards are multilingual AAC card and phrase inventory designed for kids' special education."/>
      <Hero language={"en"}/>
      <div className="content">
        <div style={{height: 20}}></div>
        <h2 style={{textAlign: "center"}}>Features</h2>
        <p style={{margin: "auto", marginBottom: 30, textAlign: "center"}}>Using Assistive Cards, developers and designers can make assistive software and educational games for children, parents can make their own printed AAC boards etc.</p>

        <div className="features">
          <div className="feature">
            <img src="https://api.assistivecards.com/cards/conversation/speak.png" alt="Speak conversation card"/>
            <div>
              <h3>Multilingual</h3>
              <p>Card and phrase translations support 37 languages.</p>
            </div>
          </div>
          <div className="feature">
            <img src="https://api.assistivecards.com/cards/conversation/outside.png" alt="Outside conversation card"/>
            <div>
              <h3>Multicultural</h3>
              <p>Designed with multicultural and regional userbase in mind.</p>
            </div>
          </div>
          <div className="feature">
            <img src="https://api.assistivecards.com/cards/conversation/help.png" alt="Help conversation card"/>
            <div>
              <h3>Neurodiverse</h3>
              <p>Created using autism and ADHD friendly color palette and object contrasts.</p>
            </div>
          </div>
          <div className="feature">
            <img src="https://api.assistivecards.com/cards/conversation/bath.png" alt="Bath conversation card"/>
            <div>
              <h3>Kid-friendly</h3>
              <p>We invisioned cute, fun and child appealing grahpics and phrases.</p>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  )
}
