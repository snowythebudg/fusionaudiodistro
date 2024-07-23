import React from "react";
import { transformVar } from "@quarkly/atomize";
import { createGlobalStyle } from "styled-components";

const pageStyles = {
    "404": {
        "transition": "",
        "transform": "matrix3d(1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1)"
    },
    "index": {
        "transition": "",
        "transform": "matrix3d(1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1)"
    },
    "tos": {
        "transition": "",
        "transform": "matrix3d(1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1)"
    },
    "privacy-policy": {
        "transition": "",
        "transform": "matrix3d(1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1)"
    },
    "submit-releases": {
        "transition": "",
        "transform": "matrix3d(1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1)"
    }
};

const PageStyles = createGlobalStyle`
    body {
        ${({ styles }) =>
            Object.entries(styles || {}).map(
                ([prop, value]) => `${prop}: ${transformVar(prop, value)};`
            )}
    }
`;
export const GlobalQuarklyPageStyles = ({ pageUrl }) => <PageStyles styles={pageStyles[pageUrl]} />
