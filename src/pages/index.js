import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, LinkBox, Box, Button, Section, Icon, Strong, Span, List } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack } from "@quarkly/components";
import { MdArrowDownward, MdCheckCircle, MdAttachMoney } from "react-icons/md";
import { FaInstagram, FaGithub, FaYoutube } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section sm-padding="8px 0 8px 0" quarkly-title="Header-6" padding="24px 0px 24px 0px" background="#000000">
			<Override
				slot="SectionContent"
				flex-direction="row"
				justify-content="space-between"
				max-width="100%"
				width="100%"
				padding="0px 24px 0px 24px"
			/>
			<LinkBox flex-direction="row" href="/index" display="flex" grid-gap="12px">
				<Image
					src="https://uploads.quarkly.io/661c7265e8900d0022f18227/images/fusion%20audio.png?v=2024-04-15T00:52:41.142Z"
					display="block"
					width="36px"
					height="36px"
					srcSet="https://smartuploads.quarkly.io/661c7265e8900d0022f18227/images/fusion%20audio.png?v=2024-04-15T00%3A52%3A41.142Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/661c7265e8900d0022f18227/images/fusion%20audio.png?v=2024-04-15T00%3A52%3A41.142Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/661c7265e8900d0022f18227/images/fusion%20audio.png?v=2024-04-15T00%3A52%3A41.142Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/661c7265e8900d0022f18227/images/fusion%20audio.png?v=2024-04-15T00%3A52%3A41.142Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/661c7265e8900d0022f18227/images/fusion%20audio.png?v=2024-04-15T00%3A52%3A41.142Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/661c7265e8900d0022f18227/images/fusion%20audio.png?v=2024-04-15T00%3A52%3A41.142Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/661c7265e8900d0022f18227/images/fusion%20audio.png?v=2024-04-15T00%3A52%3A41.142Z&quality=85&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Text
					margin="0"
					md-margin="0px 0 0px 0"
					text-align="left"
					font="--lead"
					sm-margin="0px 0 0px 0"
					display="block"
					min-width="22pc"
					color="#ffffff"
				>
					Fusion Audio Distribution
				</Text>
			</LinkBox>
			<Box
				display="flex"
				padding="12px 0"
				justify-content="center"
				align-items="flex-start"
				flex-direction="row"
				width="20%"
				sm-width="50%"
				sm-align-items="center"
				sm-flex-direction="row"
				sm-justify-content="flex-start"
				md-width="50%"
				lg-width="20%"
				md-justify-content="flex-start"
				md-order="-1"
			/>
			<Box
				display="flex"
				padding="12px 0"
				justify-content="flex-end"
				align-items="flex-start"
				flex-direction="row"
				width="40%"
				sm-width="50%"
				sm-align-items="center"
				sm-flex-direction="row"
				sm-justify-content="flex-start"
				md-width="50%"
				lg-width="40%"
				md-justify-content="flex-start"
				md-display="none"
			>
				<Button
					type="link"
					href="mailto:snowythebudg@gmail.com?Release Submission"
					border-color="#01010d"
					background="#ffffff"
					color="#000000"
				>
					Get in contact!
				</Button>
			</Box>
		</Section>
		<Section
			background="linear-gradient(0deg,rgba(4, 8, 12, 0.6) 0%,rgba(4, 8, 12, 0.6) 100%),--color-darkL2 url(https://images.unsplash.com/photo-1525362081669-2b476bb628c3?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000) center/cover"
			padding="64px 0"
			sm-padding="40px 0"
			color="--light"
			font="--base"
		>
			<Stack>
				<StackItem width="75%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text color="--lightD2" letter-spacing="1px" text-transform="uppercase" margin="0">
						Excellence in everything
					</Text>
					<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0">
						Striving for fast and reliable audio distribution. Unparalleled service for everyone.
					</Text>
				</StackItem>
			</Stack>
			<Box text-align="center" margin="96px 0 0 0">
				<Text margin="8px 0" text-transform="uppercase">
					Who we are
				</Text>
				<Icon category="md" margin="0 auto" icon={MdArrowDownward} />
			</Box>
		</Section>
		<Section
			padding="48px 0 48px 0"
			sm-padding="60px 0 60px 0"
			quarkly-title="About-14"
			background="--color-dark"
			color="#ffffff"
		>
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" sm-min-width="280px" />
			<Box
				display="flex"
				width="40%"
				justify-content="flex-start"
				lg-width="100%"
				align-items="flex-start"
				lg-margin="0px 0px 0px 0px"
				margin="0px 0px 0px 0px"
				lg-padding="0px 0px 0px 0px"
				lg-justify-content="center"
			>
				<Image
					src="https://images.unsplash.com/photo-1476136236990-838240be4859?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"
					object-fit="cover"
					transform="translateY(0px)"
					transition="transform 0.2s ease-in-out 0s"
					hover-transform="translateY(-10px)"
					sm-min-height="100vw"
					height="100%"
					srcSet="https://images.unsplash.com/photo-1476136236990-838240be4859?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=500 500w,https://images.unsplash.com/photo-1476136236990-838240be4859?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800 800w,https://images.unsplash.com/photo-1476136236990-838240be4859?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1080 1080w,https://images.unsplash.com/photo-1476136236990-838240be4859?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600 1600w,https://images.unsplash.com/photo-1476136236990-838240be4859?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000 2000w,https://images.unsplash.com/photo-1476136236990-838240be4859?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2600 2600w,https://images.unsplash.com/photo-1476136236990-838240be4859?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
			</Box>
			<Box
				display="flex"
				width="60%"
				flex-direction="column"
				align-items="flex-start"
				lg-width="100%"
				lg-align-items="flex-start"
				lg-margin="0px 0px 0px 0px"
				padding="48px 64px 48px 64px"
				justify-content="center"
				background="#000000"
				md-padding="36px 40px 48px 40px"
				sm-padding="36px 24px 48px 24px"
			>
				<Text
					margin="0px 0px 16px 0px"
					color="--light"
					font="--headline3"
					lg-text-align="center"
					sm-text-align="left"
				>
					Company History
				</Text>
				<Text
					margin="0px 0px 40px 0px"
					color="--light"
					font="--base"
					lg-text-align="left"
					sm-text-align="left"
				>
					Fusion Audio DIstribution was started on April 10th, 2024 and was created with a desire to provide fast and reliable audio distribution to the newest of artists!
				</Text>
				<Text
					margin="0px 0px 16px 0px"
					color="--light"
					font="--headline3"
					lg-text-align="center"
					sm-text-align="left"
				>
					Our Missions & Vision
				</Text>
				<Text
					margin="0px 0px 40px 0px"
					color="--light"
					font="--base"
					lg-text-align="left"
					lg-margin="0px 0px 36px 0px"
					sm-text-align="left"
				>
					At Fusion Audio Distribution, we strive to provide the fastest audio delivery to over 30+ streaming services.{" "}
				</Text>
			</Box>
		</Section>
		<Section
			padding="60px 0 90px 0"
			sm-padding="60px 0 60px 0"
			min-height="600px"
			sm-min-height="auto"
			display="flex"
			background="--color-dark"
			quarkly-title="Advantages/Features-6"
		>
			<Override
				slot="SectionContent"
				flex-direction="row"
				flex-wrap="wrap"
				grid-gap="5%"
				sm-min-width="280px"
			/>
			<Box
				display="flex"
				width="100%"
				flex-direction="column"
				justify-content="flex-start"
				align-items="flex-start"
				lg-width="100%"
				lg-align-items="flex-start"
				lg-margin="0px 0px 60px 0px"
				sm-margin="0px 0px 40px 0px"
				sm-padding="0px 0px 0px 0px"
				padding="0px 0px 0px 0px"
				lg-flex-direction="row"
				lg-flex-wrap="wrap"
				sm-width="100%"
				md-margin="0px 0px 30px 0px"
				margin="0px 0px 48px 0px"
				lg-justify-content="center"
			>
				<Text as="p" font="--base" color="--purple" margin="0px 0px 8px 0px">
					<Strong>
						Why we're better.
					</Strong>
				</Text>
				<Text
					as="h1"
					margin="0px"
					font="--headline2"
					color="--light"
					width="100%"
					md-width="100%"
					md-margin="0px 0px 32px 0px"
					md-padding="0px 0px 0px 0px"
					sm-font="normal 600 40px/1.2 --fontFamily-sans"
					lg-text-align="center"
				>
					How Fusion Audio Distribution compares to other distributors.
				</Text>
				<Text
					as="p"
					margin="20px 0 0 0"
					font="--lead"
					font-size="20px"
					font-weight="300"
					color="--light"
					width="50%"
					md-width="100%"
					md-margin="0px 0px 0px 0px"
					md-padding="0px 0px 0px 0px"
					sm-font="--base"
					lg-text-align="center"
					lg-width="100%"
				>
					Fusion Audio Distribution has more features then your regular distributor!
				</Text>
			</Box>
			<List
				margin="40px 0px 0px 0px"
				padding="0px 0px 0px 0px"
				as="ul"
				sm-margin="24px 0 0 0"
				list-style-type="none"
				font="normal normal 18px/150% sans-serif"
				display="grid"
				flex-direction="column"
				grid-gap="24px 32px"
				lg-margin="32px 0px 0px 0px"
				grid-template-columns="repeat(2, 1fr)"
				sm-grid-template-columns="1fr"
			>
				<Box margin="0px 0px 0px 0px" display="flex" grid-gap="16px">
					<Icon
						display="block"
						category="md"
						icon={MdCheckCircle}
						size="20px"
						color="--purple"
						margin="5px 0 0 0"
					/>
					<Text padding="0" margin="0" color="--light">
						<Span
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
							font="normal 600 16px/1.5 --fontFamily-sans"
						>
							Fast ASAP audio delivery.{" "}
							<Span
								font-weight="300"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
							>
								WIth Fusion Audio Distribution, we can deliver in as fast as two days!
							</Span>
						</Span>
					</Text>
				</Box>
				<Box margin="0px 0px 0px 0px" display="flex" grid-gap="16px">
					<Icon
						display="block"
						category="md"
						icon={MdAttachMoney}
						size="20px"
						color="--purple"
						margin="5px 0 0 0"
					/>
					<Text padding="0" margin="0" font="18px/27px --fontFamily-sans" color="--light">
						<Span
							font-weight="600"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
							font="normal 600 16px/1.5 --fontFamily-sans"
						>
							Equal royalty splits.{" "}
							<Span
								font-weight="300"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
							>
								When distributing with us, you maintain 80% of your royalties!
							</Span>
						</Span>
					</Text>
				</Box>
			</List>
		</Section>
		<Section padding="50px 0 50px 0" quarkly-title="Footer-3" color="#000000" background="#000000">
			<Override slot="SectionContent" sm-align-items="center" />
			<Box
				display="flex"
				grid-template-columns="repeat(5, 1fr)"
				grid-gap="16px 24px"
				align-self="center"
				margin="0px 0px 40px 0px"
				align-content="center"
				justify-items="start"
				text-align="center"
				color="#ffffff"
			>
				<LinkBox href="instagram.com/teaofthetemple">
					<Icon
						category="fa"
						icon={FaInstagram}
						size="24px"
						color="#5a5d64"
						hover-color="--dark"
						transition="background-color 1s ease 0s"
					/>
				</LinkBox>
				<LinkBox href="github.com/snowythebudg">
					<Icon
						category="fa"
						icon={FaGithub}
						size="24px"
						color="#5a5d64"
						hover-color="--dark"
						transition="background-color 1s ease 0s"
					/>
				</LinkBox>
				<LinkBox href="https://youtube.com/@mintybudgie">
					<Icon
						category="fa"
						icon={FaYoutube}
						size="24px"
						color="#5a5d64"
						hover-color="--dark"
						transition="background-color 1s ease 0s"
					/>
				</LinkBox>
			</Box>
			<Text
				margin="0 0px 0 0px"
				font="--base"
				color="#ffffff"
				text-align="center"
				sm-display="flex"
				sm-flex-wrap="wrap"
			>
				© 2024 Fusion Audio Distribution. All rights reserved.
				<br />
				Distribution services powered by TunePartner B.V
			</Text>
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