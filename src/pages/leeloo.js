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
        <SEO title="Leeloo AAC" description="Helps non-verbal kids to communicate with their parents, teachers and friends."/>
        <div className="section">
          <div className="sectionDescription right">
            <img src={require("../images/leeloo/app.png")} style={{width: 100, height: 100, marginBottom: 25, boxShadow: "0px 0px 5px 1px rgba(105, 137, 255, 0.4)", borderRadius: "50%"}}/>

            <h1 style={{fontSize: 38}}>Say hello to<br/>
            Leeloo AAC App</h1>

            <p style={{fontSize: 23}}>Helps non-verbal kids to communicate with their parents, teachers and friends.</p>

            <div className="download">
              <a href="https://apps.apple.com/us/app/leeloo-aac-autism-speech-app/id1508952198" target="_blank">
                <img src={require("../images/as.svg")} />
              </a>
              <a href="https://play.google.com/store/apps/details?id=org.dreamoriented.leeloo" target="_blank">
                <img src={require("../images/gp.svg")} />
              </a>
            </div>
          </div>

          <div className="sectionImage right">
            <div className="sectionBackground right">
              <img src={require("../images/blob.svg")} className="blob right"/>
              <img src={require("../images/particals.svg")} className="particals right"/>
            </div>
            <Screenshot1 />
          </div>
        </div>


        <div className="section" style={{flexDirection: "column"}}>
          <Screenshot3 />
          <div className="sectionDescription" style={{width: "100%"}}>
            <h1 style={{textAlign: "center"}}>Designed with<br/>
            accessibility in mind</h1>

            <div className="sectionList">
              <div>
                <h3>Works in both Phones and Tablets</h3>
                <p>Enjoy Leeloo App in both iOS and Android, helping your kid communicate with the use of a phone or a tablet.</p>
              </div>

              <div>
                <h3>Super autism-friendly colors</h3>
                <p>Re-thinking accessibility with the support of Autism friendly color palettes. Every choice of colors are hand-picked from our very own autism friendly color generator.</p>
              </div>

              <div>
                <h3>Supports Text-to-Speech and Haptic Touch</h3>
                <p>Leeloo app also has text-to-speech voice capability. Every card pressed will reveal options of phrases, and the chosen phrase will be read by a text-to-speech robot.</p>
              </div>
            </div>
          </div>

        </div>


        <div className="section">
          <div className="sectionImage">
            <div className="sectionBackground">
              <img src={require("../images/blob.svg")} className="blob"/>
              <img src={require("../images/particals.svg")} className="particals"/>
            </div>
            <Screenshot2 />
          </div>

          <div className="sectionDescription">
            <h1>Control Leeloo AAC<br/>
            the way you<br/>
            want it</h1>

            <h3>Control app access</h3>
            <p>Option to set control app access within the settings of Leeloo app</p>

            <h3>Set-up different profiles in one App</h3>
            <p>Add as many profiles, edit, manage profiles easily</p>

            <h3>Customize your AAC board</h3>
            <p>Choose packs you want and re-order them</p>
          </div>

        </div>
      </Layout>
    )
  }
}

export default IndexPage
