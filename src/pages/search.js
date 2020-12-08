import React, { Component } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import T from "../ui"
import { element } from "prop-types"

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      icons: []
    }
  }

  handleChange(event) {
    this.searchIcons(event.target.value);
  }

  searchIcons(word){
    fetch('https://api.svgapi.com/v1/Ty5WcDa63E/list/?search='+word)
      .then(res => res.json())
      .then(parsedJSON => parsedJSON.icons)
      .then(icons => {
        this.setState({icons: icons})
      }).catch(err => console.log(err))
  }

  render(){
    return(
      <Layout language={"en"}>
        <SEO title="Search" description="Helps non-verbal kids to communicate with their parents, teachers and friends."/>
        <div className="content">
          <h1>Search</h1>
          <div className="searchContent">
            <input type="text" className="searchInput" placeholder="Search" onChange={this.handleChange.bind(this)} />
            <button className="searchButton"><img src={require("../images/search.svg")} className="searchimg" /></button>
          </div>

          <div>
          {this.state.icons.map((icon, i) => {
            return <img src={icon.url} style={{width: 50, height: 50}}/>
          })}
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
