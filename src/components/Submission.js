import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import { Text, Box, Input, Button, Section } from "@quarkly/widgets";
import QuarklycommunityKitNetlifyForm from "./QuarklycommunityKitNetlifyForm";
const defaultProps = {
	"padding": "80px 0 80px 0",
	"position": "relative",
	"background": "#000000",
	"quarkly-title": "Form-4"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"z-index": "1",
			"left": "0px",
			"top": "0px",
			"right": "auto",
			"bottom": "auto",
			"position": "static",
			"grid-template-columns": "repeat(2, 1fr)"
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"display": "flex",
			"flex-direction": "column",
			"justify-content": "center",
			"align-items": "center"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"lg-padding": "0px 0px 0px 0px",
			"sm-font": "normal 700 36px/1.2 --fontFamily-sans",
			"margin": "0px 0px 18px 0px",
			"font": "normal 600 42px/1.2 --fontFamily-sans",
			"color": "--light",
			"text-align": "center",
			"padding": "0px 0 0px 0px",
			"lg-width": "100%",
			"lg-margin": "0px 0px 25px 0px",
			"children": "Release submission"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"margin": "0px 0 50px 0px",
			"font": "normal 300 16px/1.5 --fontFamily-sansHelvetica",
			"lg-margin": "0px 0 50px 0px",
			"text-align": "center",
			"display": "flex",
			"width": "600px",
			"sm-width": "auto",
			"md-width": "100%",
			"color": "#ffffff",
			"children": <>
				We may recieve a lot of releases, please send your release information here and we'll try our best to get back to you. Remember that we're a limited access distributor!
				<br />
				<br />
				The form will disappear when you've submitted it, this usually means that it's gone through successfully!
			</>
		}
	},
	"box2": {
		"kind": "Box",
		"props": {
			"position": "relative",
			"z-index": "1",
			"display": "flex",
			"lg-flex-direction": "column",
			"flex-direction": "column",
			"align-items": "center"
		}
	},
	"quarklycommunityKitNetlifyForm": {
		"kind": "QuarklycommunityKitNetlifyForm",
		"props": {
			"lg-margin": "0px 0px 35px 0px",
			"sm-margin": "0px 0px 25px 0px",
			"sm-width": "100%",
			"successMessage": "Thanks, we'll get back to you soon! ",
			"errorMessage": "Unfortunately, we've run across an error. Maybe try again?",
			"background": "#000000",
			"formName": "form1",
			"border-color": "#ff8500"
		}
	},
	"quarklycommunityKitNetlifyFormOverride": {
		"kind": "Override",
		"props": {
			"slot": "Form",
			"display": "block"
		}
	},
	"box3": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"lg-flex-wrap": "wrap",
			"margin": "0px 0px 15px 0px",
			"flex-direction": "column"
		}
	},
	"box4": {
		"kind": "Box",
		"props": {
			"min-width": "10px",
			"min-height": "10px",
			"display": "flex",
			"margin": "0px 0px 20px 0px",
			"sm-flex-direction": "column",
			"sm-width": "100%"
		}
	},
	"box5": {
		"kind": "Box",
		"props": {
			"min-width": "10px",
			"min-height": "10px",
			"margin": "0px 15px 0px 0px",
			"sm-margin": "0px 0 15px 0px"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 8px 0px",
			"font": "normal 400 16px/1.5 --fontFamily-sans",
			"color": "#ffffff",
			"children": "Artist name"
		}
	},
	"input": {
		"kind": "Input",
		"props": {
			"margin": "0px 10px 0px 0px",
			"padding": "12px 16px 12px 16px",
			"width": "100%",
			"font": "--lead",
			"md-max-width": "none",
			"border-radius": "8px",
			"name": "Artist name.",
			"type": "text",
			"required": true,
			"md-margin": "0px 0 16px 0px",
			"background": "rgba(255, 255, 255, 0.1)",
			"border-color": "--color-lightD2",
			"color": "#ffffff"
		}
	},
	"box6": {
		"kind": "Box",
		"props": {
			"min-width": "10px",
			"min-height": "10px"
		}
	},
	"text3": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 8px 0px",
			"font": "normal 400 16px/1.5 --fontFamily-sans",
			"color": "#ffffff",
			"children": "Preferred writer name (legal names only)"
		}
	},
	"input1": {
		"kind": "Input",
		"props": {
			"margin": "0px 0 0px 0px",
			"padding": "12px 16px 12px 16px",
			"width": "100%",
			"font": "--lead",
			"md-max-width": "none",
			"border-radius": "8px",
			"name": "Writer name",
			"type": "text",
			"required": true,
			"md-margin": "0px 0 16px 0px",
			"background": "rgba(255, 255, 255, 0.1)",
			"border-color": "--color-lightD2",
			"color": "#ffffff"
		}
	},
	"box7": {
		"kind": "Box",
		"props": {
			"min-width": "10px",
			"min-height": "10px",
			"display": "flex",
			"margin": "0px 0px 0 0px",
			"sm-flex-direction": "column",
			"flex-direction": "column",
			"sm-width": "100%"
		}
	},
	"box8": {
		"kind": "Box",
		"props": {
			"min-width": "10px",
			"min-height": "10px",
			"margin": "0px 15px 20px 0px",
			"sm-margin": "0px 0 15px 0px",
			"width": "100%"
		}
	},
	"text4": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 8px 0px",
			"font": "normal 400 16px/1.5 --fontFamily-sans",
			"color": "#ffffff",
			"children": "Email address"
		}
	},
	"input2": {
		"kind": "Input",
		"props": {
			"margin": "0px 10px 0px 0px",
			"padding": "12px 16px 12px 16px",
			"width": "100%",
			"font": "--lead",
			"md-max-width": "none",
			"border-radius": "8px",
			"name": "Email",
			"type": "email",
			"required": true,
			"md-margin": "0px 0 16px 0px",
			"background": "rgba(255, 255, 255, 0.1)",
			"border-color": "--color-lightD2",
			"color": "#ffffff"
		}
	},
	"box9": {
		"kind": "Box",
		"props": {
			"min-width": "10px",
			"min-height": "10px",
			"margin": "0px 0px 20px 0px",
			"width": "100%"
		}
	},
	"text5": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 8px 0px",
			"font": "normal 400 16px/1.5 --fontFamily-sans",
			"color": "#ffffff",
			"children": "Release name"
		}
	},
	"input3": {
		"kind": "Input",
		"props": {
			"margin": "0px 0 0px 0px",
			"padding": "12px 16px 12px 16px",
			"width": "100%",
			"font": "--lead",
			"md-max-width": "none",
			"border-radius": "8px",
			"name": "Release name",
			"type": "text",
			"required": true,
			"md-margin": "0px 0 16px 0px",
			"background": "rgba(255, 255, 255, 0.1)",
			"border-color": "--color-lightD2",
			"color": "#ffffff"
		}
	},
	"box10": {
		"kind": "Box",
		"props": {
			"min-width": "10px",
			"min-height": "10px",
			"margin": "0px 0px 20px 0px",
			"width": "100%"
		}
	},
	"text6": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 8px 0px",
			"font": "normal 400 16px/1.5 --fontFamily-sans",
			"color": "#ffffff",
			"children": <>
				Preferred (C) line{" "}
			</>
		}
	},
	"input4": {
		"kind": "Input",
		"props": {
			"margin": "0px 0 0px 0px",
			"padding": "12px 16px 12px 16px",
			"width": "100%",
			"font": "--lead",
			"md-max-width": "none",
			"border-radius": "8px",
			"name": "(C) lines",
			"type": "text",
			"required": true,
			"md-margin": "0px 0 16px 0px",
			"background": "rgba(255, 255, 255, 0.1)",
			"border-color": "--color-lightD2",
			"color": "#ffffff"
		}
	},
	"text7": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 8px 0px",
			"font": "normal 400 16px/1.5 --fontFamily-sans",
			"color": "#ffffff",
			"children": "Other release information (release date, link to audio files and copyright documents, if your songs are explicit, etc)"
		}
	},
	"input5": {
		"kind": "Input",
		"props": {
			"margin": "0px 10px 30px 0px",
			"padding": "12px 16px 52px 16px",
			"width": "100%",
			"font": "--lead",
			"md-max-width": "none",
			"border-radius": "8px",
			"name": "Message",
			"type": "text",
			"required": true,
			"background": "rgba(255, 255, 255, 0.1)",
			"border-color": "--color-lightD2",
			"color": "#ffffff"
		}
	},
	"button": {
		"kind": "Button",
		"props": {
			"padding": "11px 24px 11px 24px",
			"font": "normal 400 20px/1.5 --fontFamily-sans",
			"sm-width": "100%",
			"focus-box-shadow": "none",
			"color": "--light",
			"background": "#ff5500",
			"border-radius": "8px",
			"hover-background": "--color-darkL1",
			"hover-color": "--light",
			"hover-transition": "background-color 0.5s ease 0s",
			"transition": "background-color 0.1s ease 0s",
			"margin": "0px 0px 15px 0px"
		}
	},
	"box11": {
		"kind": "Box",
		"props": {
			"min-width": "10px",
			"min-height": "10px",
			"display": "flex",
			"sm-flex-direction": "column"
		}
	},
	"text8": {
		"kind": "Text",
		"props": {
			"margin": "0px 5px 0px 0px",
			"font": "normal 400 18px/1.5 --fontFamily-sansHelvetica",
			"color": "#ffffff",
			"children": "Your data isn't going anywhere, don't worry!"
		}
	},
	"quarklycommunityKitNetlifyForm1": {
		"kind": "QuarklycommunityKitNetlifyForm",
		"props": {
			"lg-margin": "0px 0px 35px 0px",
			"sm-margin": "0px 0px 25px 0px",
			"sm-width": "100%",
			"successMessage": "Thanks, we'll get back to you soon! ",
			"errorMessage": "Unfortunately, we've run across an error. Maybe try again?",
			"background": "#000000",
			"formName": "form1",
			"border-color": "#ff8500"
		}
	},
	"quarklycommunityKitNetlifyFormOverride1": {
		"kind": "Override",
		"props": {
			"slot": "Form",
			"display": "block"
		}
	}
};

const Submission = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override slot="SectionContent" max-width="1220px" />
		<Box {...override("box")}>
			<Box {...override("box1")}>
				<Text {...override("text")} />
				<Text {...override("text1")} />
			</Box>
			<Box {...override("box2")}>
				<QuarklycommunityKitNetlifyForm {...override("quarklycommunityKitNetlifyForm")}>
					<Override {...override("quarklycommunityKitNetlifyFormOverride")} />
					<Box {...override("box3")}>
						<Box {...override("box4")}>
							<Box {...override("box5")}>
								<Text {...override("text2")} />
								<Input {...override("input")} />
							</Box>
							<Box {...override("box6")}>
								<Text {...override("text3")} />
								<Input {...override("input1")} />
							</Box>
						</Box>
						<Box {...override("box7")}>
							<Box {...override("box8")}>
								<Text {...override("text4")} />
								<Input {...override("input2")} />
							</Box>
							<Box {...override("box9")}>
								<Text {...override("text5")} />
								<Input {...override("input3")} />
							</Box>
							<Box {...override("box10")}>
								<Text {...override("text6")} />
								<Input {...override("input4")} />
							</Box>
						</Box>
						<Text {...override("text7")} />
						<Input {...override("input5")} />
						<Button {...override("button")}>
							Submit release!
						</Button>
						<Box {...override("box11")}>
							<Text {...override("text8")} />
						</Box>
					</Box>
				</QuarklycommunityKitNetlifyForm>
				<QuarklycommunityKitNetlifyForm {...override("quarklycommunityKitNetlifyForm1")}>
					<Override {...override("quarklycommunityKitNetlifyFormOverride1")} />
				</QuarklycommunityKitNetlifyForm>
			</Box>
		</Box>
		{children}
	</Section>;
};

Object.assign(Submission, { ...Section,
	defaultProps,
	overrides
});
export default Submission;