import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default class Team extends React.Component {

	render() {
		return (
			<Layout language={"en"}>
				<SEO title="Our Team" description="Helps non-verbal kids to communicate with their parents, teachers and friends." />
				<div className="content">

					<h2>Our Team</h2>
					<div className="team">
						<div className="teamMember">
							<img src={require("../images/team/burak.png")} alt="Burak Tokak profile photo" className="memberImg" />
							<h4>Burak Tokak</h4>
							<h4>Developer</h4>
							<div className="socials">
								<a target="_blank" href="https://github.com/btk" ><img src={require("../images/social/github.svg")} alt="Github SVG" /></a>
							</div>
						</div>

						<div className="teamMember">
							<img src={require("../images/team/hannah.jpeg")} alt="Hannah Milan profile photo" className="memberImg" />
							<h4>Hannah Milan</h4>
							<h4>Designer</h4>
							<div className="socials">
								<a target="_blank" href="https://twitter.com/humbleuidesigns"><img src={require("../images/social/twitter.svg")} alt="Twitter SVG" /></a>
							</div>
						</div>

						<div className="teamMember">
							<img src={require("../images/team/yaren.png")} width={"172px"} alt="Yaren Kurt profile photo" className="memberImg" />
							<h4>Yaren Kurt</h4>
							<h4>Illustrator</h4>
							<div className="socials">
								<a target="_blank" href="https://twitter.com/scytoms" ><img src={require("../images/social/twitter.svg")} alt="Twitter SVG" /></a>
								<a target="_blank" href="https://www.behance.net/scytoms"><img src={require("../images/social/behance.svg")} alt="Behance SVG" /></a>
							</div>
						</div>

						<div className="teamMember">
							<img src={require("../images/team/ebru.png")} alt="Ebru Kaya profile photo" className="memberImg" />
							<h4>Ebru Kaya</h4>
							<h4>Developer</h4>
							<div className="socials">
								<a target="_blank" href="https://github.com/ebru"><img src={require("../images/social/github.svg")} alt="Github SVG" /></a>
								<a target="_blank" href="https://twitter.com/ebrukye" ><img src={require("../images/social/twitter.svg")} alt="Twitter SVG" /></a>
							</div>
						</div>

						<div className="teamMember">
							<img src={require("../images/team/arda.jpeg")} alt="Arda Özkardeşler profile photo" className="memberImg" />
							<h4>Arda Özkardeşler</h4>
							<h4>Developer</h4>
							<div className="socials">
								<a target="_blank" href="https://github.com/ArdaOzkardesler"><img src={require("../images/social/github.svg")} alt="Github SVG" /></a>
							</div>
						</div>

						<div className="teamMember">
							<img src={require("../images/team/ozlem.png")} alt="Özlem Gücükbel profile photo" className="memberImg" />
							<h4>Özlem Gücükbel</h4>
							<h4>Developer</h4>
							<div className="socials">
								<a target="_blank" href="https://github.com/ogucukbel"><img src={require("../images/social/github.svg")} alt="Github SVG" /></a>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		)
	}

}
