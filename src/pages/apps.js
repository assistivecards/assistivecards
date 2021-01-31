import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BreadCrumbs from "../components/breadcrumb"
import Screenshot1 from "../components/screenshot1"

export default class Apps extends React.Component{
    render(){
        return(
            <Layout language={"en"}>
            <SEO title="Apps" description="Helps non-verbal kids to communicate with their parents, teachers and friends."/>
            <div className="content">
                <BreadCrumbs links={[
                    {title: "Home", link: "/"}
                ]} />

                <div className="apps">
                    <div className="section" style={{width: "100%"}}>
                    <div className="sectionDescription right">
                        <img src={require("../images/leeloo/app.png")} style={{width: 100, height: 100, marginBottom: 25}}/>

                        <h1>Leeloo AAC App</h1>

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


                    <div className="sectionDescription right" style={{textAlign: "right"}}>
                        <img src={require("../images/huni/huni.png")} style={{width: 100, height: 100, marginBottom: 25}}/>

                        <h1>Huni App</h1>

                        <p style={{fontSize: 23}}>Helps non-verbal kids to communicate with their parents, teachers and friends.</p>

                        <div className="download" style={{float: "right"}}>
                        <a href="https://apps.apple.com/us/app/leeloo-aac-autism-speech-app/id1508952198" target="_blank">
                            <img src={require("../images/as.svg")} />
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=org.dreamoriented.leeloo" target="_blank">
                            <img src={require("../images/gp.svg")} />
                        </a>
                        </div>
                    </div>
                    </div>

                    <div className="sectionDescription right">
                        <img src={require("../images/wingo/wingo.png")} style={{width: 100, height: 100, marginBottom: 25}}/>

                        <h1>Leeloo AAC App</h1>

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



                </div>



                


            </div>
            </Layout>
        )
    }
}