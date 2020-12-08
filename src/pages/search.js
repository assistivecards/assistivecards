import React, { Component } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import T from "../ui"
import { element } from "prop-types"

class Search extends Component {
/*
  constructor(props){
    super(props);
    this.state = {
      icons: []
    }
  }

  UNSAFE_componentWillMount(){
    this.searchIcons()
  }

  searchIcons(){
    fetch('https://api.svgapi.com/v1/Ty5WcDa63E/list/?search=apple')
      .then(res => res.json())
      .then(parsedJSON => parsedJSON.icons)
      .then(icons => icons.map(
        i => this.setState({
          icons: i
        })
      ))
      
      
      .catch(err => console.log(err))
  }
*/
  render(){
    return(
      <Layout language={"en"}>
        <SEO title="Search" description="Helps non-verbal kids to communicate with their parents, teachers and friends."/>
        <div className="content">
          <h1>Search</h1>
          <div className="searchcontent">
            <input type="text" className="searchinp" placeholder="Search" /> 
            <button className="searchbtn" onClick="alert();" ><img src={require("../images/search.svg")} className="searchimg" /></button> 
          </div>
        </div>
      </Layout>
    )
  }
}

export default Search

export const pageQuery = graphql`
  query {
    posts: allMarkdownRemark(sort: {
          fields: [frontmatter___date]
          order: DESC
        }) {
        edges {
          node {
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              slug
              title
            }
          }
        }
      }
  }
`
