import { createGlobalStyle } from "styled-components";


export const AppStyles = createGlobalStyle`
@font-face {
  font-family: "TildaSans";
  src: local("TildaSans-Bold"),
    url("./../assets/fonts/TildaSans-Bold.woff2") format("woff2"),
    url("./../assets/fonts/TildaSans-Bold.woff") format("woff");
  font-weight: bold;
}

@font-face {
  font-family: "TildaSans";
  src: local("TildaSans-ExtraBold"),
    url("./../assets/fonts/TildaSans-ExtraBold.woff2") format("woff2"),
    url("./../assets/fonts/TildaSans-ExtraBold.woff") format("woff");
  font-weight: bolder;
}

@font-face {
  font-family: "TildaSans";
  src: local("TildaSans-Light"),
    url("./../assets/fonts/TildaSans-Light.woff2") format("woff2"),
    url("./../assets/fonts/TildaSans-Light.woff") format("woff");
  font-weight: light;
}

@font-face {
  font-family: "TildaSans";
  src: local("TildaSans-Medium"),
    url("./../assets/fonts/TildaSans-Medium.woff2") format("woff2"),
    url("./../assets/fonts/TildaSans-Medium.woff") format("woff");
  font-weight: medium;
}

@font-face {
  font-family: "TildaSans";
  src: local("TildaSans-Regular"),
    url("./../assets/fonts/TildaSans-Regular.woff2") format("woff2"),
    url("./../assets/fonts/TildaSans-Regular.woff") format("woff");
  font-weight: normal;
}

@font-face {
  font-family: "TildaSans";
  src: local("TildaSans-Semibold"),
    url("./../assets/fonts/TildaSans-Semibold.woff2") format("woff2"),
    url("./../assets/fonts/TildaSans-Semibold.woff") format("woff");
  font-weight: 600;
}
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    padding: 0;
    margin: 0;
    font-family: "TildaSans", Arial, Helvetica, sans-serif;
    font-weight: normal;
  }

  ul,
  ol {
    list-style: none;
  }

  html {
    scroll-behavior: smooth;

    &:focus-within {
      scroll-behavior: smooth;
    }
  }

  body {
    min-height: 100%;
    text-rendering: optimizespeed;
    &::-webkit-scrollbar {
      background: rgba(0, 66, 105, 0.06);
      border-radius: 4px;
      width: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background: #ced8de;
      border-radius: 10px;
    }
  
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  img,
  picture,
  svg {
    display: block;
  }

  @media screen and (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      transition-duration: 0.01ms !important;
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      scroll-behavior: auto !important;
    }
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
  }
`
;

