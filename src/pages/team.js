import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BreadCrumb from "../components/breadcrumb"
import BreadCrumbs from "../components/breadcrumb"

export default class Team extends React.Component {

    render(){
        return(
            <Layout language={"en"}>
            <SEO title="Our Team" description="Helps non-verbal kids to communicate with their parents, teachers and friends."/>
            <div className="content">
                <BreadCrumbs links={[
                    {title: "Home", link: "/"}
                ]} />
                <h2>Our Team</h2>
                <div className="team">
                    <div className="teamMember">
                        <img src="https://avatars.githubusercontent.com/u/5216601" />
                        <h4>Burak Tokak</h4>
                        <h4>Developer</h4>
                        <div className="socials">    
                            <a href="https://twitter.com/btkmakes" ><img src={require("../images/twitter.svg")} /></a>
                            <a href="https://github.com/btk" ><img src={require("../images/github.svg")} /></a>
                        </div>
                    </div>

                    <div className="teamMember">
                        <img src="https://pbs.twimg.com/profile_images/1296803827987947528/s8ocbPEo_400x400.jpg" />
                        <h4>Hannah Milan</h4>
                        <h4>Designer</h4>
                        <div className="socials">
                        <a href="https://twitter.com/humbleuidesigns"><img src={require("../images/twitter.svg")} /></a>
                        </div>
                    </div>
                    
                    <div className="teamMember">
                        <img src="https://avatars.githubusercontent.com/u/42184193" />
                        <h4>Enes Coşan UZ</h4>
                        <h4>Developer</h4>
                        <div className="socials">
                            <a href="https://twitter.com/enescosanuz" ><img src={require("../images/twitter.svg")} /></a>
                            <a href="https://github.com/enescosanuz" ><img src={require("../images/github.svg")} /></a>
                        </div>
                    </div>

                    <div className="teamMember">
                        <img src="https://mir-s3-cdn-cf.behance.net/user/138/e43dae20198487.5ee775302f0a4.png" width={"172px"}/>
                        <h4>Yaren Kurt</h4>
                        <h4>Illustrator</h4>
                        <div className="socials">
                            <a href="https://www.behance.net/scytoms"><img src={require("../images/behance.svg")} /></a>
                        </div>
                    </div>

                    <div className="teamMember">
                        <img src="https://avatars.githubusercontent.com/u/45464584" />
                        <h4>Ebru Kaya</h4>
                        <h4>Developer</h4>
                        <div className="socials">
                            <a href="https://github.com/ebru"><img src={require("../images/github.svg")} /></a>
                        </div>
                    </div>
                </div>
            </div>
            </Layout>
        )
    }

}