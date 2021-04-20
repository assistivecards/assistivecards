import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Screenshot1 from "../components/huni/screenshot1"
import Screenshot2 from "../components/huni/screenshot2"
import Screenshot3 from "../components/huni/screenshot3"

class IndexPage extends React.Component {
  state = {

  }

  render(){
    return (
      <Layout>
        <SEO title="Huni AI" description="Helps non-verbal kids learn to speak and do speech practices with artificial intelligence." image={require("../images/huni/huni.png")} />
        <div className="section">
          <div className="sectionDescription right">
            <img src={require("../images/huni/huni.png")} style={{width: 100, height: 100, marginBottom: 25, boxShadow: "0px 0px 5px 1px rgba(99, 178, 181, 0.4)", borderRadius: "50%"}}/>

            <h1 style={{fontSize: 38}}>Learn to speak with<br/>
            Huni App</h1>

            <p style={{fontSize: 23}}>Speech Recognition powered Speech Training SLP App designed for children.</p>

            <div className="download" style={{marginBottom: 0}}>
              <a href="https://apps.apple.com/us/app/huni-delayed-speech-therapy/id1516921796" target="_blank">
                <img src={require("../images/as.svg")} />
              </a>
              <a href="https://play.google.com/store/apps/details?id=org.dreamoriented.huni" target="_blank">
                <img src={require("../images/gp.svg")} />
              </a>
              
            </div>
            <a href="https://apkpure.com/tr/huni-ai-speech-training-kids-with-delayed-speech/org.dreamoriented.huni" style={{textDecoration: "none", color: "gray"}} target="_blank">or download APK</a>
          </div>

          <div className="sectionImage right">
            <div className="sectionBackground right">
              <img src={require("../images/blob_green.svg")} className="blob right"/>
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
                <p>Enjoy Huni App in both iOS and Android, helping your kid communicate with the use of a phone or a tablet.</p>
              </div>

              <div>
                <h3>Super autism-friendly colors</h3>
                <p>Re-thinking accessibility with the support of Autism friendly color palettes. Every choice of colors are hand-picked from our very own autism friendly color generator.</p>
              </div>

              <div>
                <h3>Supports Voice Recognition and TTS</h3>
                <p>Huni app uses voice recognation for training, also has text-to-speech voice that users can use to learn the pronounciations.</p>
              </div>
            </div>
          </div>

        </div>


        <div className="section">
          <div className="sectionImage">
            <div className="sectionBackground">
              <img src={require("../images/blob_green.svg")} className="blob"/>
              <img src={require("../images/particals.svg")} className="particals"/>
            </div>
            <Screenshot2 />
          </div>

          <div className="sectionDescription">
            <h1>Control Huni AI<br/>
            the way you want</h1>

            <h3>Control app access</h3>
            <p>Option to set control app access within the settings of Huni app</p>

            <h3>Related Category Groups</h3>
            <p>All the speech cards are grouped in categories for training</p>

            <h3>Different Language Accents</h3>
            <p>Choose the language accent that your child is comfortable with</p>
          </div>

        </div>
      </Layout>
    )
  }
}

export default IndexPage
