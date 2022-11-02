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
							<img src="https://avatars.githubusercontent.com/u/5216601" alt="Burak Tokak profile photo" className="memberImg" />
							<h4>Burak Tokak</h4>
							<h4>Developer</h4>
							<div className="socials">
								<a href="https://github.com/btk" ><img src={require("../images/social/github.svg")} alt="Github SVG" /></a>
							</div>
						</div>

						<div className="teamMember">
							<img src="https://pbs.twimg.com/profile_images/1383690311268851716/Ykp3xzoK_400x400.jpg" alt="Hannah Milan profile photo" className="memberImg" />
							<h4>Hannah Milan</h4>
							<h4>Designer</h4>
							<div className="socials">
								<a href="https://twitter.com/humbleuidesigns"><img src={require("../images/social/twitter.svg")} alt="Twitter SVG" /></a>
							</div>
						</div>

						<div className="teamMember">
							<img src="https://mir-s3-cdn-cf.behance.net/user/230/6c9c9920198487.617439f119c09.png" width={"172px"} alt="Yaren Kurt profile photo" className="memberImg" />
							<h4>Yaren Kurt</h4>
							<h4>Illustrator</h4>
							<div className="socials">
								<a href="https://twitter.com/scytoms" ><img src={require("../images/social/twitter.svg")} alt="Twitter SVG" /></a>
								<a href="https://www.behance.net/scytoms"><img src={require("../images/social/behance.svg")} alt="Behance SVG" /></a>
							</div>
						</div>

						<div className="teamMember">
							<img src="https://avatars.githubusercontent.com/u/45464584" alt="Ebru Kaya profile photo" className="memberImg" />
							<h4>Ebru Kaya</h4>
							<h4>Developer</h4>
							<div className="socials">
								<a href="https://github.com/ebru"><img src={require("../images/social/github.svg")} alt="Github SVG" /></a>
								<a href="https://twitter.com/ebrukye" ><img src={require("../images/social/twitter.svg")} alt="Twitter SVG" /></a>
							</div>
						</div>

						<div className="teamMember">
							<img src="https://avatars.githubusercontent.com/u/15131858" alt="Arda Özkardeşler profile photo" className="memberImg" />
							<h4>Arda Özkardeşler</h4>
							<h4>Developer</h4>
							<div className="socials">
								<a href="https://github.com/ArdaOzkardesler"><img src={require("../images/social/github.svg")} alt="Github SVG" /></a>
							</div>
						</div>

						<div className="teamMember">
							<img src="https://avatars.githubusercontent.com/u/88405137" alt="Özlem Gücükbel profile photo" className="memberImg" />
							<h4>Özlem Gücükbel</h4>
							<h4>Developer</h4>
							<div className="socials">
								<a href="https://github.com/ogucukbel"><img src={require("../images/social/github.svg")} alt="Github SVG" /></a>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		)
	}

}
