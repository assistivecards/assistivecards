import React, { Component } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      results: []
    };
    this.allCards = [];
  }

  getPacks(){
    fetch("https://api.assistivecards.com/packs/en/metadata.json")
    .then(res => res.json())
    .then(parsedJSON => {
      parsedJSON.forEach(pack => {
        this.getCards(pack.slug)
      })
    })
  }

  getCards(slug){
    fetch("https://api.assistivecards.com/packs/en/"+slug+".json")
    .then(res => res.json())
    .then(cards => {
      cards.forEach(card => {
        card.packSlug = slug;
        this.allCards.push(card);
      })
    });
  }

  searchTerm(word){
    var term = word.target.value;
    var results = this.allCards.filter((card) => {
      return card.title.toLowerCase().includes(term.toLowerCase());
    })
    if(!term){
      this.setState({results: []})
    } else this.setState({results:results})
  }

  componentDidMount(){
    this.getPacks();
  }

  render(){
    return(
      <Layout language={"en"}>
        <SEO title="Search" description="Helps non-verbal kids to communicate with their parents, teachers and friends."/>
        <div className="content">
          <h1>Search / {this.state.results.length ? this.state.results[0].title : ""}</h1>
          <div className="searchContent">
            <input type="text" className="searchInput" placeholder="Search" onChange={(word) => this.searchTerm(word)} />
            <button className="searchButton"><img src={require("../images/search.svg")} className="searchimg" /></button>
            <div className="searchOutput">
              {this.state.results.lenght != 0 && this.state.results.map((card, i) => {
                return <Link to={"https://assistivecards.com/en/card/"+card.packSlug+"/"+card.slug+"/"}><img src={"https://api.assistivecards.com/cards/"+card.packSlug+"/"+card.slug+".png"} key={i} className="searchImage" /></Link>
              })}

              {/* {this.state.results.map((card, i) => {
                return <Link to={"https://assistivecards.com/en/card/"+card.packSlug+"/"+card.slug+"/"}><img src={"https://api.assistivecards.com/cards/"+card.packSlug+"/"+card.slug+".png"} key={i} className="searchImage" /></Link>
              })} */}

            </div>

          </div>

        </div>
      </Layout>
    )
  }
}

export default Search
/*
export const pageQuery = graphql`
  query($pack: String!, $slug: String!) {
    pack(slug: { eq: $pack }){
      slug
      color
      count
      id
      locale {
        en
      }
    }
    card(slug: { eq: $slug }, pack: { eq: $pack }) {
      slug
      pack
      id
      locale {
       en {
         title
         phrases {
           phrase
           type
         }
       }
      }
    }
    cards: allCard(filter: {pack: {eq: $pack}}){
     edges {
       node {
         slug
         id
         locale {
          en {
            title
          }
         }
       }
     }
   }
  }
`*/
