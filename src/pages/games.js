import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BreadCrumbs from "../components/breadcrumb"

export default class Apps extends React.Component {
	render() {
		return (
			<Layout language={"en"}>
				<SEO title="Assistive Games" description="See the games made with assistive cards library, the games we made and keeping updates." />
				<div className="content">
					<h2>Assistive Games</h2>
					<p>See the games made with assistive cards library, the games we made and keeping updates, we will also list games you are or will make at this page.</p>
					<div className="apps" style={{ width: "100%", margin: "auto" }}>

						<div className="app">
								<img src={"https://api.assistivecards.com/games/icon/circle@0.5x.png"} style={{ boxShadow: "0px 0px 5px 1px rgba(99, 178, 181, 0.4)", borderRadius: "15%", marginBottom: 10 }} />
								<div className="appContent" style={{paddingTop: 0}}>
									<h1>Circle Objects Game</h1>
									<p style={{marginBottom: 10}}>Circle the right card by drawing on the device, improves kids' motor skills.</p>
									<div className="download" style={{marginBottom: 0}}>
										<a href="https://apps.apple.com/us/app/draw-circles-learn-objects/id1668076300" target="_blank">
											<img src={require("../images/as.svg")} style={{height:40}}/>
										</a>
										<a href="https://play.google.com/store/apps/details?id=com.assistivecards.circle" target="_blank">
											<img src={require("../images/gp.svg")} style={{height:40}}/>
										</a>
									</div>
								</div>
						</div>

						<div className="app">
								<img src={"https://api.assistivecards.com/games/icon/silhouette@0.5x.png"} style={{ boxShadow: "0px 0px 5px 1px rgba(105, 137, 255, 0.4)", borderRadius: "15%", marginBottom: 10 }} />
								<div className="appContent" style={{paddingTop: 0}}>
									<h1>Silhouette Matching Game</h1>
									<p style={{marginBottom: 10}}>The goal of this game is to find the silhouette of the given cards.</p>
									<div className="download" style={{marginBottom: 0}}>
										<a href="https://apps.apple.com/us/app/silhouette-match-educational/id1663676151" target="_blank">
											<img src={require("../images/as.svg")} style={{height:40}}/>
										</a>
										<a href="https://play.google.com/store/apps/details?id=com.assistivecards.silhouette" target="_blank">
											<img src={require("../images/gp.svg")} style={{height:40}}/>
										</a>
									</div>
								</div>
						</div>

						<div className="app">
								<img src={"https://api.assistivecards.com/games/icon/memory@0.5x.png"} style={{ boxShadow: "0px 0px 5px 1px rgba(99, 178, 181, 0.4)", borderRadius: "15%", marginBottom: 10 }} />
								<div className="appContent" style={{paddingTop: 0}}>
									<h1>Card Memory Game</h1>
									<p style={{marginBottom: 10}}>The goal is to find a pair by flipping face down cards and matching them.</p>
									<div className="download" style={{marginBottom: 0}}>
										<a href="https://apps.apple.com/us/app/memorize-card-assistive-game/id1658292272" target="_blank">
											<img src={require("../images/as.svg")} style={{height:40}}/>
										</a>
										<a href="https://play.google.com/store/apps/details?id=com.assistivecards.memory" target="_blank">
											<img src={require("../images/gp.svg")} style={{height:40}}/>
										</a>
									</div>
								</div>
						</div>

						<div className="app">
								<img src={"https://api.assistivecards.com/games/icon/card_crash@0.5x.png"} style={{ boxShadow: "0px 0px 5px 1px rgba(99, 178, 181, 0.4)", borderRadius: "15%", marginBottom: 10 }} />
								<div className="appContent" style={{paddingTop: 0}}>
									<h1>Card Crash Game</h1>
									<p style={{marginBottom: 10}}>Match 3 or more same cards to crash them, like candy crash.</p>
									<div className="download" style={{marginBottom: 0, opacity: 0.1}}>
										<a href="https://apps.apple.com/us/app/memorize-card-assistive-game/id1658292272" target="_blank">
											<img src={require("../images/as.svg")} style={{height:40}}/>
										</a>
										<a href="https://play.google.com/store/apps/details?id=com.assistivecards.memory" target="_blank">
											<img src={require("../images/gp.svg")} style={{height:40}}/>
										</a>
									</div>
								</div>
						</div>

						<p></p>
						<p>Have you made an game with assistive cards assets and translations? And if you want to be featured here, send us an email at <a href="mailto:info@assistivecards.com">info@assistivecards.com</a></p>

					</div>
				</div>
			</Layout>
		)
	}
}
