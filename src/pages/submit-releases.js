import React from "react";
import theme from "theme";
import { Theme, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"submit-releases"} />
		<Helmet>
			<title>
				Fusion Audio Distribution
			</title>
			<meta name={"description"} content={"A fast and reliable music distributor for all artists new or experienced. Send a demo now to get started on your journey!"} />
			<meta property={"og:title"} content={"Fusion Audio Distribution"} />
			<meta property={"og:description"} content={"A fast and reliable music distributor for all artists new or experienced. Submit the form to get started on your journey!"} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/661c7265e8900d0022f18227/images/android-chrome-512x512.png?v=2024-04-15T02:25:23.709Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.Submission>
			<Override slot="text1">
				Fusion Audio Distribution is no longer accepting releases. All submissions through this form will be rejected and/or transferred to XZ1 Recordings (only by request)
			</Override>
			<Override slot="button" background="#4c00ff" />
		</Components.Submission>
		<Components.Footer>
			<Override slot="text">
				© 2024-2025 Fusion Audio Distribution. All rights reserved
				<br />
				Subdomain provided by FreeDNS
			</Override>
		</Components.Footer>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"661c7265e8900d0022f18225"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});