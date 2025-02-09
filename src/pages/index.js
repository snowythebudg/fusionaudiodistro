import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, LinkBox, Box, Button, Section, Icon, Strong, Span, List } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
import { MdArrowDownward, MdCheckCircle, MdAttachMoney } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Fusion Audio Distribution
			</title>
			<meta name={"description"} content={"A free music distribution service that can deliver in as little as 3 days"} />
			<meta property={"og:title"} content={"Fusion Audio Distribution"} />
			<meta property={"og:description"} content={"A fast and reliable music distributor for all artists new or experienced. Submit the form to get started on your journey!"} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/661c7265e8900d0022f18227/images/android-chrome-512x512.png?v=2024-04-15T02:25:23.709Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/661c7265e8900d0022f18227/images/fusion%20audio.png?v=2024-04-15T00:52:41.142Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/661c7265e8900d0022f18227/images/fusion%20audio.png?v=2024-04-15T00:52:41.142Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/661c7265e8900d0022f18227/images/fusion%20audio.png?v=2024-04-15T00:52:41.142Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/661c7265e8900d0022f18227/images/fusion%20audio.png?v=2024-04-15T00:52:41.142Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/661c7265e8900d0022f18227/images/fusion%20audio.png?v=2024-04-15T00:52:41.142Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/661c7265e8900d0022f18227/images/fusion%20audio.png?v=2024-04-15T00:52:41.142Z"} />
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
					href="https://ebb.l5.ca/fusionaudiodist"
					border-color="#6800ff"
					background="#000000"
					color="#ffffff"
					border-width="2px"
					border-style="dashed"
					text-decoration-line="initial"
					width="200px"
					text-align="center"
				>
					Legacy site
				</Button>
			</Box>
		</Section>
		<Section
			background="linear-gradient(0deg,rgba(4, 8, 12, 0.6) 0%,rgba(4, 8, 12, 0.6) 100%),--color-darkL2 url(https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) center/cover"
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
			display="none"
		>
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" sm-min-width="280px" />
			<Section
				text-align="center"
				background-color="--primary"
				color="--light"
				padding="80px 0"
				sm-padding="40px 0"
				background="#000000"
			>
				<Text
					as="h5"
					font="--lead"
					margin="10px 0 0 0"
					text-transform="uppercase"
					letter-spacing="5px"
				>
					Hold on!
				</Text>
				<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0 0 0">
					Before you look around
				</Text>
				<Text as="p" font="--lead" margin="40px 0 20px 0" color="#ffffff">
					Hey, welcome to the Fusion Audio Distribution website! Before you start, we'd like to give you some information first. To start, this page is a one-pager and as expected, there are no other pages (except for our TOS and Privacy Policy). Second, if you're interested in joining. Please read through each section of this website so you'll know what to submit and what not to do. Lastly, the form at the bottom is a little bit broken. It tends to disappear once submitted, it does work though. Please review the
					<Link
						href="/tos"
						color="#ff00f6"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						{" "}Terms of Service
					</Link>
					{" "}and the{" "}
					<Link
						href="/privacy-policy"
						link-color="#ee00ee"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						Privacy Policy
					</Link>
					{" "}before submitting. If you need help with anything, click{" "}
					<Link
						href="mailto:snowythebudg@gmail.conm?Help Request (Fusion Audio Distribution)"
						color="#ee00ee"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						here
					</Link>
					{" "}to send us an email!
					<br />
					<br />
				</Text>
			</Section>
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
			text-align="center"
			background-color="--primary"
			color="--light"
			padding="80px 0"
			sm-padding="40px 0"
			background="#000000"
		>
			<Text
				as="h5"
				font="--lead"
				margin="10px 0 0 0"
				text-transform="uppercase"
				letter-spacing="5px"
			>
				important announcement
			</Text>
			<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0 0 0">
				Limited Operations
			</Text>
			<Text as="p" font="--lead" margin="40px 0 20px 0">
				Fusion Audio Distribution is no longer accepting releases. If you need music distribution. Please send a demo to our record label,{" "}
				<Link
					href="xz1label.l5.ca"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
					target="_blank"
				>
					XZ1 Recordings
				</Link>
				. If you have already released through Fusion and would like your current release to be taken down or transferred to XZ1 Recordings, please email{" "}
				<Link
					href="mailto:snowythebudg@gmail.com?Release takedown (Fusion)"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					here
				</Link>
				. Transferring or taking down a Fusion release is not mandatory but it'd be preferred.
			</Text>
		</Section>
		<Section
			padding="60px 0 90px 0"
			sm-padding="60px 0 60px 0"
			min-height="600px"
			sm-min-height="auto"
			display="flex"
			background="#000000"
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
				<Text as="p" font="--base" color="--indigo" margin="0px 0px 8px 0px">
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						Why you should choose us.
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
					How Fusion Audio Distribution compares to other free distributors.
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
					Fusion Audio Distribution has more features then your regular free distributor! Scroll down to read the submission requirements and rules, then apply!
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
						color="--indigo"
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
								WIth Fusion Audio Distribution, we can deliver in 2-7 days!
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
						color="--indigo"
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
		<Section padding="90px 0 100px 0" quarkly-title="List-4" background="#000000 linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%)">
			<Text
				margin="0px 0px 90px 0px"
				text-align="center"
				font="normal 600 42px/1.2 --fontFamily-sans"
				md-margin="0px 0px 60px 0px"
				color="#ffffff"
			>
				What to submit in the form.
			</Text>
			<Box
				min-width="100px"
				min-height="100px"
				display="grid"
				grid-template-columns="repeat(3, 1fr)"
				grid-gap="56px 34px"
				lg-grid-template-columns="repeat(2, 1fr)"
				sm-grid-template-columns="1fr"
				sm-grid-gap="36px 0"
				md-grid-gap="40px 25px"
			>
				<Box min-width="10px" min-height="10px" display="flex">
					<Text
						margin="0px 0 0px 0px"
						display="flex"
						align-items="center"
						justify-content="center"
						font="normal 500 20px/1.2 --fontFamily-sans"
						background="#cbcfd5"
						border-radius="50%"
						width="60px"
						height="60px"
						min-width="60px"
						color="#000000"
					>
						1
					</Text>
					<Box min-width="10px" min-height="10px" margin="0px 0px 0px 24px">
						<Text margin="0px 0px 15px 0px" font="normal 500 24px/1.2 --fontFamily-sans" color="#ffffff">
							Artist and Writer names
						</Text>
						<Text margin="0px 0px 0px 0px" font="normal 300 16px/1.5 --fontFamily-sansHelvetica" color="#ffffff">
							You'll need to add what your artist name and what your writer name is. You'll also need to include whether you have a Spotify or Apple Music artist profile. If you're a new artist, tell us and we can create profiles for you!
						</Text>
					</Box>
				</Box>
				<Box min-width="10px" min-height="10px" display="flex">
					<Text
						margin="0px 0 0px 0px"
						display="flex"
						align-items="center"
						justify-content="center"
						font="normal 500 20px/1.2 --fontFamily-sans"
						background="#cbcfd5"
						border-radius="50%"
						width="60px"
						height="60px"
						min-width="60px"
					>
						2
					</Text>
					<Box min-width="10px" min-height="10px" margin="0px 0px 0px 24px">
						<Text margin="0px 0px 15px 0px" font="normal 500 24px/1.2 --fontFamily-sans" color="#ffffff">
							Release metadata
						</Text>
						<Text margin="0px 0px 0px 0px" font="normal 300 16px/1.5 --fontFamily-sansHelvetica" color="#ffffff">
							This one is pretty self explanatory. You'll need to submit your release name, a track list (EP or Album), genre, release date, and a copy of your album art{" "}
							<br />
							<br />
							NOTE: make sure to set your release date more than 4 days in advance!
						</Text>
					</Box>
				</Box>
				<Box min-width="10px" min-height="10px" display="flex">
					<Text
						margin="0px 0 0px 0px"
						display="flex"
						align-items="center"
						justify-content="center"
						font="normal 500 20px/1.2 --fontFamily-sans"
						background="#cbcfd5"
						border-radius="50%"
						width="60px"
						height="60px"
						min-width="60px"
					>
						3
					</Text>
					<Box min-width="10px" min-height="10px" margin="0px 0px 0px 24px">
						<Text margin="0px 0px 15px 0px" font="normal 500 24px/1.2 --fontFamily-sans" color="#ffffff">
							Copyright information
						</Text>
						<Text margin="0px 0px 0px 0px" font="normal 300 16px/1.5 --fontFamily-sansHelvetica" color="#ffffff">
							If you'd like, you can pick what you'd like to put in the (C) field of your release. the record label of your release will be set to "Fusion Audio Distribution" but you get to choose your (C) line
						</Text>
					</Box>
				</Box>
				<Box min-width="10px" min-height="10px" display="flex">
					<Text
						margin="0px 0 0px 0px"
						display="flex"
						align-items="center"
						justify-content="center"
						font="normal 500 20px/1.2 --fontFamily-sans"
						background="#cbcfd5"
						border-radius="50%"
						width="60px"
						height="60px"
						min-width="60px"
					>
						4
					</Text>
					<Box min-width="10px" min-height="10px" margin="0px 0px 0px 24px">
						<Text margin="0px 0px 15px 0px" font="normal 500 24px/1.2 --fontFamily-sans" color="#ffffff">
							Explicit tracks
						</Text>
						<Text margin="0px 0px 0px 0px" font="normal 300 16px/1.5 --fontFamily-sansHelvetica" color="#ffffff">
							If there are any explicit tracks in your release. Please tell us what they are so we can mark them adequately.{" "}
						</Text>
					</Box>
				</Box>
				<Box min-width="10px" min-height="10px" display="flex">
					<Text
						margin="0px 0 0px 0px"
						display="flex"
						align-items="center"
						justify-content="center"
						font="normal 500 20px/1.2 --fontFamily-sans"
						background="#cbcfd5"
						border-radius="50%"
						width="60px"
						height="60px"
						min-width="60px"
					>
						5
					</Text>
					<Box min-width="10px" min-height="10px" margin="0px 0px 0px 24px">
						<Text margin="0px 0px 15px 0px" font="normal 500 24px/1.2 --fontFamily-sans" color="#ffffff">
							Audio files
						</Text>
						<Text margin="0px 0px 0px 0px" font="normal 300 16px/1.5 --fontFamily-sansHelvetica" color="#ffffff">
							This one is also pretty obvious. Don't forget to submit your audio files! HQ .wav files only. Please submit your audio files to us via a Bandcamp download code or a mega.nz link.
						</Text>
					</Box>
				</Box>
				<Box min-width="10px" min-height="10px" display="flex">
					<Text
						margin="0px 0 0px 0px"
						display="flex"
						align-items="center"
						justify-content="center"
						font="normal 500 20px/1.2 --fontFamily-sans"
						background="#cbcfd5"
						border-radius="50%"
						width="60px"
						height="60px"
						min-width="60px"
					>
						6
					</Text>
					<Box min-width="10px" min-height="10px" margin="0px 0px 0px 24px">
						<Text margin="0px 0px 15px 0px" font="normal 500 24px/1.2 --fontFamily-sans" color="#ffffff">
							Email address
						</Text>
						<Text margin="0px 0px 0px 0px" font="normal 300 16px/1.5 --fontFamily-sansHelvetica" color="#ffffff">
							We'll need your email address for you to recieve your royalties.{" "}
						</Text>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="120px 0 130px 0" lg-padding="80px 0 90px 0" quarkly-title="Stages/Steps-3" background="#000000">
			<Text
				margin="0px 0px 80px 0px"
				font="--headline2"
				color="--light"
				border-color="--color-dark"
				text-align="center"
				lg-margin="0px 0px 50px 0px"
			>
				Rules to follow when submitting to Fusion Audio Distribution
			</Text>
			<Box
				min-width="100px"
				min-height="100px"
				display="grid"
				grid-template-columns="repeat(3, 1fr)"
				md-grid-template-columns="1fr"
				md-grid-template-rows="auto"
				md-grid-gap={0}
				padding="0px 50px 0px 50px"
				lg-padding="0px 0 0px 0"
			>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					lg-padding="0px 25px 26px 25px"
					flex-direction="column"
					align-items="center"
					padding="0px 30px 30px 30px"
					md-padding="0px 25px 34px 25px"
					sm-padding="0px 0 34px 0"
				>
					<Box
						min-width="50px"
						min-height="50px"
						background="--color-darkL1"
						display="flex"
						align-items="center"
						justify-content="center"
						width="50px"
						height="50px"
						border-radius="50%"
						margin="0px 0px 30px 0px"
						color="--darkL2"
					>
						<Text margin="0px 0px 0px 0px" color="--light" font="--lead" text-align="center">
							1
						</Text>
					</Box>
					<Box min-width="100px" min-height="100px" margin="0px 0px 0px 0">
						<Text
							margin="0px 0px 15px 0px"
							border-color="--color-light"
							color="--light"
							font="normal 500 22px/1.2 --fontFamily-sans"
							text-align="center"
						>
							Copyright Documents
						</Text>
						<Text
							margin="0px 0px 0px 0px"
							font="normal 400 16px/1.5 --fontFamily-sansHelvetica"
							color="#ffffff"
							text-align="center"
							border-color="#7a7c7f"
						>
							You MUST submit copyright documents prior to submitting a release to Fusion Audio Distribution. Even if you only used a drum loop. Failure to do so will result in you being banned from submitting releases to Fusion Audio Distribution, even if you're a new artist
						</Text>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					lg-padding="0px 25px 26px 25px"
					flex-direction="column"
					align-items="center"
					padding="0px 30px 30px 30px"
					md-padding="0px 25px 34px 25px"
					sm-padding="0px 0 34px 0"
				>
					<Box
						min-width="50px"
						min-height="50px"
						background="--color-darkL1"
						display="flex"
						align-items="center"
						justify-content="center"
						width="50px"
						height="50px"
						border-radius="50%"
						margin="0px 0px 30px 0px"
						color="--darkL2"
					>
						<Text margin="0px 0px 0px 0px" color="--light" font="--lead" text-align="center">
							2
						</Text>
					</Box>
					<Box min-width="100px" min-height="100px" margin="0px 0px 0px 0">
						<Text
							margin="0px 0px 15px 0px"
							border-color="--color-light"
							color="--light"
							font="normal 500 22px/1.2 --fontFamily-sans"
							text-align="center"
						>
							AI Policies
						</Text>
						<Text
							margin="0px 0px 0px 0px"
							font="normal 400 16px/1.5 --fontFamily-sansHelvetica"
							color="#ffffff"
							text-align="center"
							border-color="#7a7c7f"
						>
							AI music or vocals are strictly forbidden by Fusion Audio Distribution and will be removed by our quality control team. You will also be banned from the service if AI music or vocals are detected. We are aware that services such as suno.ai can make extremely realistic music with AI, we won't fall for it. We're not that stupid.
						</Text>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					lg-padding="0px 25px 26px 25px"
					flex-direction="column"
					align-items="center"
					padding="0px 30px 30px 30px"
					md-padding="0px 25px 0 25px"
					sm-padding="0px 0 0 0"
				>
					<Box
						min-width="50px"
						min-height="50px"
						background="--color-darkL1"
						display="flex"
						align-items="center"
						justify-content="center"
						width="50px"
						height="50px"
						border-radius="50%"
						margin="0px 0px 30px 0px"
						color="--darkL2"
					>
						<Text margin="0px 0px 0px 0px" color="--light" font="--lead" text-align="center">
							3
						</Text>
					</Box>
					<Box min-width="100px" min-height="100px" margin="0px 0px 0px 0">
						<Text
							margin="0px 0px 15px 0px"
							border-color="--color-light"
							color="--light"
							font="normal 500 22px/1.2 --fontFamily-sans"
							text-align="center"
						>
							Free for profit beats/instrumentals
						</Text>
						<Text
							margin="0px 0px 0px 0px"
							font="normal 400 16px/1.5 --fontFamily-sansHelvetica"
							color="#ffffff"
							text-align="center"
							border-color="#7a7c7f"
						>
							Free for profit beats are allowed on Fusion Audio Distribution, all you have to do is add a link to the original beat in your copyright documents
						</Text>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0" sm-padding="40px 0" background="#000000">
			<Override slot="SectionContent" align-items="center" />
			<Text
				as="h2"
				font="--headline1"
				md-font="--headline2"
				margin="20px 0 0 0"
				color="#ffffff"
			>
				Send a demo!
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="20px 0 20px 0"
				text-align="center"
				color="#ffffff"
			>
				Fusion Audio Distribution is no longer accepting demos or release submissions, emails regarding Fusion demos will be ignored. Please send a demo to our team at XZ1 Recordings (
				<Link href="#">
					https://xzone.64-b.it
				</Link>
				)
			</Text>
		</Section>
		<Components.QuarklycommunityKitNetlifyForm />
		<Components.QuarklycommunityKitNetlifyForm display="block" />
		<Components.QuarklycommunityKitNetlifyForm />
		<Components.QuarklycommunityKitNetlifyForm />
		<Components.QuarklycommunityKitNetlifyForm formName="form1" successMessage="Thanks! We'll get back to you ASAP" errorMessage="We're extremely sorry but there's likely an issue on our end. Try again?" />
		<Components.QuarklycommunityKitNetlifyForm />
		<Components.QuarklycommunityKitNetlifyForm />
		<Components.QuarklycommunityKitNetlifyForm />
		<Components.QuarklycommunityKitNetlifyForm />
		<Components.QuarklycommunityKitNetlifyForm />
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