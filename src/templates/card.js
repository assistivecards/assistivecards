import React, { useState } from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import T from "../ui"

import BreadCrumbs from "../components/breadcrumb"

export default function Template({
  data, path // this prop will be injected by the GraphQL query below.
}) {
  const { pack, card, cards } = data;
  
  let [modal, setModal] = useState(false);
  
  let toggleModal = () => {
    if(modal){
      setModal(false)
    } else {
      setModal(true)
    }
  }
  
  let language = path.split("/")[1];
  if(!card.locale[language]){
    return null;
  }
  
  


  return (
    <Layout language={language}>
      <SEO title={`${card.locale[language].title} Card`} description={`Project description for ${card.locale[language].title}`}/>
      <div className="content">
      <BreadCrumbs links={[
            {title: "Home", link: "/"},
            {title: "Packs", link: `/${language}/packs`},
            {title: `${pack.locale[language]}`, link: `/${language}/pack/${pack.locale[language].toLowerCase()}`},
            {title: `${card.locale[language].title}`, link: `/${language}/card/${pack.locale[language].toLowerCase()}/${card.locale[language].title.toLowerCase()}`}
          ]} />
        <div className="contentHolder">
          <div className="contentLeft">
            <div className="contentLeftOne">
              <h1>{card.locale[language].title} {T(language, "appName")}</h1>
              <div className="contentCard">
              <img src={`https://api.assistivecards.com/cards/${card.pack}/${card.slug}@2x.png`} style={{width: 210, height: 210}} alt={`${card.locale[language].title} SVG, PNG Vector`}/>
              </div>
              <p style={{opacity: 0.6, marginTop: 10}}>Download free {card.locale[language].title} assistive card in SVG or PNG format with JSON file of translation to 37 languages. Free vectoral {card.locale[language].title} illustration and icon.</p>
              <h3>Related Phrases</h3>
              <div className="contentPhrases">
                {card.locale[language].phrases.map((phrase, i) => {
                  return (<p key={i} className="phrasesItem">{phrase.type} {phrase.phrase}</p>);
                })}
              </div>
            </div>
            <div className="contentLeftTwo">
              <h2>Cards from {pack.locale[language]} Pack</h2>
              <div className="packs">
                {cards.edges.map(relatedCard => {
                  return (
                    <Link to={`/${language}/card/${card.pack}/${relatedCard.node.slug}/`} key={relatedCard.node.slug}>
                      <div className="packItem">
                        <img src={`https://api.assistivecards.com/cards/${card.pack}/${relatedCard.node.slug}.png`} style={{width: 90, height: 90}} alt={relatedCard.node.locale[language].title + " illustration"}/>
                        <p>{relatedCard.node.locale[language].title}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          


          <div className="contentRight">
            <div className="contentRightOne">
                <div className="downloads" onClick={() => toggleModal()}>
                  <Link>Download</Link>
                  <div className={modal ? "downloadItemsActive" : "downloadItems"}>
                    <Link to="">PNG</Link>
                    <Link to="">SVG</Link>
                    <Link to="">JSON</Link>
                  </div>
                  <p>You'll get SVG, PNG and PDF formats</p>
                </div>
            </div>

            <div className="contentRightTwo">
              <h2>Overview</h2>
              <p className="cardInformation">Category<p className="informationTexts">Playing AAC Packs</p></p>
              <p className="cardInformation">Last Update<p className="informationTexts">March 22, 2020</p></p>
              <p className="cardInformation">Total Size<p className="informationTexts">340 KB</p></p>
              <p className="cardInformation">License<p className="informationTexts"><Link to="/licensing/">Assistive Cards License</Link></p></p>
            </div>
          </div>
          
        </div>
      </div>
    </Layout>
  )
}
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
`
