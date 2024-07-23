import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import { Icon, LinkBox, Box, Text, Section } from "@quarkly/widgets";
import { FaInstagram, FaGithub, FaYoutube } from "react-icons/fa";
const defaultProps = {
	"padding": "50px 0 50px 0",
	"quarkly-title": "Footer-3",
	"color": "#000000",
	"background": "#000000"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"grid-template-columns": "repeat(5, 1fr)",
			"grid-gap": "16px 24px",
			"align-self": "center",
			"margin": "0px 0px 40px 0px",
			"align-content": "center",
			"justify-items": "start",
			"text-align": "center",
			"color": "#ffffff"
		}
	},
	"linkBox": {
		"kind": "LinkBox",
		"props": {
			"href": "instagram.com/teaofthetemple"
		}
	},
	"icon": {
		"kind": "Icon",
		"props": {
			"category": "fa",
			"icon": FaInstagram,
			"size": "24px",
			"color": "#5a5d64",
			"hover-color": "--dark",
			"transition": "background-color 1s ease 0s"
		}
	},
	"linkBox1": {
		"kind": "LinkBox",
		"props": {
			"href": "github.com/snowythebudg"
		}
	},
	"icon1": {
		"kind": "Icon",
		"props": {
			"category": "fa",
			"icon": FaGithub,
			"size": "24px",
			"color": "#5a5d64",
			"hover-color": "--dark",
			"transition": "background-color 1s ease 0s"
		}
	},
	"linkBox2": {
		"kind": "LinkBox",
		"props": {
			"href": "https://youtube.com/@mintybudgie"
		}
	},
	"icon2": {
		"kind": "Icon",
		"props": {
			"category": "fa",
			"icon": FaYoutube,
			"size": "24px",
			"color": "#5a5d64",
			"hover-color": "--dark",
			"transition": "background-color 1s ease 0s"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"margin": "0 0px 0 0px",
			"font": "--base",
			"color": "#ffffff",
			"text-align": "center",
			"sm-display": "flex",
			"sm-flex-wrap": "wrap",
			"children": <>
				© 2024 Fusion Audio Distribution. All rights reserved
				<br />
				Subdomain provided by FreeDNS
			</>
		}
	}
};

const Footer = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override slot="SectionContent" sm-align-items="center" />
		<Box {...override("box")}>
			<LinkBox {...override("linkBox")}>
				<Icon {...override("icon")} />
			</LinkBox>
			<LinkBox {...override("linkBox1")}>
				<Icon {...override("icon1")} />
			</LinkBox>
			<LinkBox {...override("linkBox2")}>
				<Icon {...override("icon2")} />
			</LinkBox>
		</Box>
		<Text {...override("text")} />
		{children}
	</Section>;
};

Object.assign(Footer, { ...Section,
	defaultProps,
	overrides
});
export default Footer;