import {createGlobalStyle} from "styled-components"
import "@fontsource/open-sans-condensed"

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Open Sans Condensed', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`