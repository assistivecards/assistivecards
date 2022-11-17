import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BreadCrumbs from "../components/breadcrumb"

export default class Apps extends React.Component {
	render() {
		return (
			<Layout language={"en"}>
				<SEO title="Apps" description="Helps non-verbal kids to communicate with their parents, teachers and friends." />
				<div className="content">
					<h2>Our Games</h2>
					<p>See the games made with assistivecards, the games we made and keeping updates, we will also list games you are or will make at this page.</p>
					<div className="apps" style={{ width: "100%", margin: "auto" }}>

						<div className="app">
							<Link to={"#"} style={{ textDecoration: "none" }}>
								<img src={"https://tamu.estore.flywire.com/cmsstatic/img/defaults/square-placeholder.svg"} style={{ boxShadow: "0px 0px 5px 1px rgba(105, 137, 255, 0.4)", borderRadius: "15%" }} />
								<div className="appContent">
									<h1>Silhouette Matching Game</h1>
									<p>The goal of this game is to find the silhouette of the given cards.<br />
										<Link to="#" style={{ color: "#6989FF" }}>Coming soon...</Link></p>
								</div>
							</Link>
						</div>

						<div className="app">
							<Link to={"#"} style={{ textDecoration: "none" }}>
								<img src={"https://tamu.estore.flywire.com/cmsstatic/img/defaults/square-placeholder.svg"} style={{ boxShadow: "0px 0px 5px 1px rgba(99, 178, 181, 0.4)", borderRadius: "15%" }} />
								<div className="appContent">
									<h1>Card Memory Game</h1>
									<p>The goal is to find a pair by flipping face down cards and matching them.<br />
										<Link to="#" style={{ color: "#63B2B5" }}>Coming soon...</Link></p>
								</div>
							</Link>
						</div>

						<p></p>
						<p>Have you made an game with assistivecards assets and translations? And if you want to be featured here, send us an email at <a href="mailto:info@assistivecards.com">info@assistivecards.com</a></p>

					</div>
				</div>
			</Layout>
		)
	}
}
