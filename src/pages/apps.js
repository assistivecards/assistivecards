import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BreadCrumbs from "../components/breadcrumb"

export default class Apps extends React.Component{
    render(){
        return(
            <Layout language={"en"}>
            <SEO title="Apps" description="Helps non-verbal kids to communicate with their parents, teachers and friends."/>
            <div className="content">
                <h2>Our Apps</h2>
                <p>Apps made with assistivecards.</p>
                <div className="apps" style={{width: "100%", margin: "auto"}}>

                    <div className="app">
                        <Link to={"/leeloo/"}>
                        <img src={require("../images/leeloo/app.png")} style={{border: "1px solid #6989FF", borderRadius: "50%"}} />
                        <div className="appContent">
                            <h1>Leeloo AAC - Autism Speech App</h1>
                            <p>Helps non-verbal kids to communicate with their parents, teachers and friends. <br/>
                            <Link to="/leeloo/" style={{color: "#6989FF"}}>Learn more..</Link></p>
                        </div>
                        </Link>
                    </div>
                    
                    <div className="app">
                        <Link to={"/huni/"}>
                        <img src={require("../images/huni/huni.png")} style={{border: "1px solid #63B2B5", borderRadius: "50%"}} />
                        <div className="appContent">
                            <h1>Huni - Delayed Speech Therapy</h1>
                            <p>Speech Recognition powered Speech Training SLP App designed for children. <br/>
                            <Link to="/huni/" style={{color: "#63B2B5"}}>Learn more..</Link></p>
                        </div>
                        </Link>
                    </div>

                    <div className="app">
                        <img src={require("../images/wingo/wingo.png")} style={{border: "1px solid #636EB5", borderRadius: "50%"}} />
                        <div className="appContent">
                            <h1>Wingo - Daily Planner for Kids</h1>
                            <p>Coming Soon..</p>
                        </div>
                    </div>

                </div>
            </div>
            </Layout>
        )
    }
}