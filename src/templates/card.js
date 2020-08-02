import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import T from "../ui"


export default function Template({
  data, path // this prop will be injected by the GraphQL query below.
}) {
  const { pack, card, cards } = data;
  let language = path.split("/")[1];

  return (
    <Layout language={language}>
      <SEO title={`${card.locale[language].title} Card`} description={`Project description for ${card.locale[language].title}`}/>
      <div className="content">
        <div className="contentHolder">
          <div className="contentLeft">
            <div className="contentCard">
              <img src={`https://api.assistivecards.com/cards/${card.pack}/${card.slug}@2x.png`} style={{width: 210, height: 210}} alt={`${card.locale[language].title} SVG, PNG Vector`}/>
            </div>
            <div className="downloads">
              <a href="">Download PNG</a>
              <a href="">Download SVG</a>
              <a href="">Translation JSON</a>
            </div>
          </div>
          <div className="contentRight">
            <h1>{card.locale[language].title} {T(language, "appName")}</h1>
            <p style={{opacity: 0.6}}>Download free {card.locale[language].title} assistive card in SVG or PNG format with JSON file of translation to 37 languages. Free vectoral {card.locale[language].title} illustration and icon.</p>
            <h3>Related Phrases</h3>
            <div>
              {card.locale[language].phrases.map((phrase, i) => {
                return (<p key={i}>{phrase.type} {phrase.phrase}</p>);
              })}
            </div>
          </div>
        </div>

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
        ar
        bn
        cs
        da
        en
        de
        es
        el
        et
        fi
        fr
        fil
        hi
        he
        id
        hu
        it
        ja
        km
        ko
        jv
        nb
        ne
        pt
        ro
        nl
        pl
        ru
        sk
        si
        uk
        sv
        th
        tr
        ur
        vi
        zh
      }
    }
    card(slug: { eq: $slug }, pack: { eq: $pack }) {
      slug
      pack
      id
      locale {
       ar {
         title
         phrases {
           phrase
           type
         }
       }
       bn {
         title
         phrases {
           phrase
           type
         }
       }
       cs {
         title
         phrases {
           phrase
           type
         }
       }
       de {
         title
         phrases {
           phrase
           type
         }
       }
       da {
         title
         phrases {
           phrase
           type
         }
       }
       en {
         title
         phrases {
           phrase
           type
         }
       }
       el {
         title
         phrases {
           phrase
           type
         }
       }
       es {
         title
         phrases {
           phrase
           type
         }
       }
       et {
         title
         phrases {
           phrase
           type
         }
       }
       fi {
         title
         phrases {
           phrase
           type
         }
       }
       fil {
         title
         phrases {
           phrase
           type
         }
       }
       fr {
         title
         phrases {
           phrase
           type
         }
       }
       he {
         title
         phrases {
           phrase
           type
         }
       }
       hi {
         title
         phrases {
           phrase
           type
         }
       }
       hu {
         title
         phrases {
           phrase
           type
         }
       }
       id {
         title
         phrases {
           phrase
           type
         }
       }
       it {
         title
         phrases {
           phrase
           type
         }
       }
       ja {
         title
         phrases {
           phrase
           type
         }
       }
       jv {
         title
         phrases {
           phrase
           type
         }
       }
       km {
         title
         phrases {
           phrase
           type
         }
       }
       ko {
         title
         phrases {
           phrase
           type
         }
       }
       nb {
         title
         phrases {
           phrase
           type
         }
       }
       ne {
         title
         phrases {
           phrase
           type
         }
       }
       nl {
         title
         phrases {
           phrase
           type
         }
       }
       pl {
         title
         phrases {
           phrase
           type
         }
       }
       pt {
         title
         phrases {
           phrase
           type
         }
       }
       ro {
         title
         phrases {
           phrase
           type
         }
       }
       ru {
         title
         phrases {
           phrase
           type
         }
       }
       si {
         title
         phrases {
           phrase
           type
         }
       }
       sk {
         title
         phrases {
           phrase
           type
         }
       }
       sv {
         title
         phrases {
           phrase
           type
         }
       }
       th {
         title
         phrases {
           phrase
           type
         }
       }
       tr {
         title
         phrases {
           phrase
           type
         }
       }
       uk {
         title
         phrases {
           phrase
           type
         }
       }
       ur {
         title
         phrases {
           phrase
           type
         }
       }
       vi {
         title
         phrases {
           phrase
           type
         }
       }
       zh {
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
          ar {
            title
          }
          bn {
            title
          }
          cs {
            title
          }
          de {
            title
          }
          da {
            title
          }
          en {
            title
          }
          el {
            title
          }
          es {
            title
          }
          et {
            title
          }
          fi {
            title
          }
          fil {
            title
          }
          fr {
            title
          }
          he {
            title
          }
          hi {
            title
          }
          hu {
            title
          }
          id {
            title
          }
          it {
            title
          }
          ja {
            title
          }
          jv {
            title
          }
          km {
            title
          }
          ko {
            title
          }
          nb {
            title
          }
          ne {
            title
          }
          nl {
            title
          }
          pl {
            title
          }
          pt {
            title
          }
          ro {
            title
          }
          ru {
            title
          }
          si {
            title
          }
          sk {
            title
          }
          sv {
            title
          }
          th {
            title
          }
          tr {
            title
          }
          uk {
            title
          }
          ur {
            title
          }
          vi {
            title
          }
          zh {
            title
          }
         }
       }
     }
   }
  }
`
