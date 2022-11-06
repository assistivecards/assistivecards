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
					<h2>Our Apps</h2>
					<p>See the apps made with assistivecards, the apps we made and keeping updates, we will also list apps you are or will make at this page.</p>
					<div className="apps" style={{ width: "100%", margin: "auto" }}>

						<div className="app">
							<Link to={"/leeloo/"} style={{ textDecoration: "none" }}>
								<img src={require("../images/leeloo/app.png")} style={{ boxShadow: "0px 0px 5px 1px rgba(105, 137, 255, 0.4)", borderRadius: "50%" }} />
								<div className="appContent">
									<h1>Leeloo AAC - Autism Speech App</h1>
									<p>Helps non-verbal kids to communicate with their parents, teachers and friends. <br />
										<Link to="/leeloo/" style={{ color: "#6989FF" }}>Learn more...</Link></p>
								</div>
							</Link>
						</div>

						<div className="app">
							<Link to={"/huni/"} style={{ textDecoration: "none" }}>
								<img src={require("../images/huni/huni.png")} style={{ boxShadow: "0px 0px 5px 1px rgba(99, 178, 181, 0.4)", borderRadius: "50%" }} />
								<div className="appContent">
									<h1>Huni - Delayed Speech Therapy</h1>
									<p>Speech Recognition powered Speech Training SLP App designed for children.<br />
										<Link to="/huni/" style={{ color: "#63B2B5" }}>Learn more...</Link></p>
								</div>
							</Link>
						</div>

						<div className="app">
							<Link to={"/chamur/"} style={{ textDecoration: "none" }}>
								<img src={require("../images/chamur/chamur.png")} style={{ boxShadow: "0px 0px 5px 1px rgb(99, 181, 128, 0.4)", borderRadius: "50%" }} />
								<div className="appContent">
									<h1>Chamur - Find In House Items</h1>
									<p>An educational scavenger hunt game that uses object recognition via device camera.<br />
										<Link to="/chamur/" style={{ color: "#63b580" }}>Learn more...</Link></p>
								</div>
							</Link>
						</div>

						<div className="app">
							<Link to={"/wingo/"} style={{ textDecoration: "none" }}>
								<img src={require("../images/wingo/wingo.png")} style={{ boxShadow: "0px 0px 5px 1px rgb(99, 110, 181, 0.4)", borderRadius: "50%" }} />
								<div className="appContent">
									<h1>Wingo - Daily Planner for Kids</h1>
									<p>Plan your children's day and communicate their tasks better and easier.<br />
										<Link to="/wingo/" style={{ color: "#636eb5" }}>Learn more...</Link></p>
								</div>
							</Link>
						</div>

						<p></p>
						<p>Have you made an app with assistivecards assets and translations? And if you want to be featured here, send us an email at <a href="mailto:info@assistivecards.com">info@assistivecards.com</a></p>

					</div>
				</div>
			</Layout>
		)
	}
}
