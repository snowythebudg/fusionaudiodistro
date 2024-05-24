import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"privacy-policy"} />
		<Helmet>
			<title>
				Fusion Audio Distribution
			</title>
			<meta name={"description"} content={"A fast and reliable music distributor for all artists new or experienced. Submit the form to get started on your journey!"} />
			<meta property={"og:title"} content={"Fusion Audio Distribution"} />
			<meta property={"og:description"} content={"A fast and reliable music distributor for all artists new or experienced. Submit the form to get started on your journey!"} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/661c7265e8900d0022f18227/images/android-chrome-512x512.png?v=2024-04-15T02:25:23.709Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0" background="--color-dark">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				width="50%"
				display="flex"
				flex-direction="column"
				justify-content="space-between"
				md-width="100%"
				padding="0px 80px 0px 0px"
				lg-padding="0px 30px 0px 0px"
				md-padding="0px 0px 0px 0px"
			>
				<Text margin="0px 0px 0px 0px" color="--orange" font="--lead" md-margin="0px 0px 20px 0px">
					Privacy Policy
				</Text>
			</Box>
			<Box
				width="50%"
				display="flex"
				flex-direction="column"
				justify-content="space-between"
				md-width="100%"
			>
				<Text margin="0px 0px 40px 0px" color="--light" font="--base">
					<br />
					Privacy Policy for Fusion Audio Distribution
					<br />
					<br />
					At Fusion Audio Distribution, accessible from fusion.l5.ca, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Fusion Audio Distribution and how we use it.
					<br />
					<br />
					If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
					<br />
					<br />
					Log Files
					<br />
					<br />
					Fusion Audio Distribution follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
					<br />
					<br />
					Privacy Policies
					<br />
					<br />
					You may consult this list to find the Privacy Policy for each of the advertising partners of Fusion Audio Distribution.
					<br />
					<br />
					Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Fusion Audio Distribution, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
					<br />
					<br />
					Note that Fusion Audio Distribution has no access to or control over these cookies that are used by third-party advertisers.
					<br />
					<br />
					Third Party Privacy Policies
					<br />
					<br />
					Fusion Audio Distribution's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
					<br />
					<br />
					You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.
					<br />
					<br />
					Children's Information
					<br />
					<br />
					Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
					<br />
					<br />
					Fusion Audio Distribution does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
					<br />
					<br />
					Online Privacy Policy Only
					<br />
					<br />
					This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Fusion Audio Distribution. This policy is not applicable to any information collected offline or via channels other than this website.
					<br />
					<br />
					Consent
					<br />
					<br />
					By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
					<br />
				</Text>
			</Box>
		</Section>
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