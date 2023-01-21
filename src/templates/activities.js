import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Packs({
  data, path // this prop will be injected by the GraphQL query below.
}) {
  const { activities } = data;
  let language = path.split("/")[1];

  return (
    <Layout language={language}>
      <SEO title={`Assitive Activities`} description={`List of all activities. Choose a assistive activitiy to see details and download.`}/>
      <div className="content">
        <h1>Assistive Activities</h1>
        <p style={{opacity: 0.6}}>List of all activities. Choose a assistive activitiy to see details and download.</p>
        <div className="activities">
          {activities.edges.map(pack => {
            if(pack.node.title){
              return (
                <Link to={`/${language}/activity/${pack.node.slug}/`} key={pack.node.slug}>
                  <div className="activityItem" style={{backgroundColor: "#f8f8fc"}}>
                    <img src={`https://api.assistivecards.com/activities/assets/${pack.node.slug}.png`} style={{width: 220, padding: 5}} alt={`${pack.node.title} assistive activity`}/>
                    <p>{pack.node.title}</p>
                  </div>
                </Link>
              );
            }
          })}
        </div>
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query{
    activities: allActivity{
      edges {
        node {
          slug
          title
        }
      }
    }
  }
`
