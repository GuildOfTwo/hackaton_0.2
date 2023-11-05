import { createGlobalStyle } from 'styled-components';
import TildaSanBlackEOT from '../assets/fonts/TildaSans-Black.eot';
import TildaSanBlackWOFF from '../assets/fonts/TildaSans-Black.woff';
import TildaSanBlackWOFF2 from '../assets/fonts/TildaSans-Black.woff';
import TildaSanBoldEOT from '../assets/fonts/TildaSans-Bold.eot';
import TildaSanBoldWOFF from '../assets/fonts/TildaSans-Bold.woff';
import TildaSanBoldWOFF2 from '../assets/fonts/TildaSans-Bold.woff2';
import TildaSanExtraBoldEOT from '../assets/fonts/TildaSans-ExtraBold.eot';
import TildaSanExtraBoldWOFF from '../assets/fonts/TildaSans-ExtraBold.woff';
import TildaSanExtraBoldWOFF2 from '../assets/fonts/TildaSans-ExtraBold.woff2';
import TildaSanLightEOT from '../assets/fonts/TildaSans-Light.eot';
import TildaSanLightWOFF from '../assets/fonts/TildaSans-Light.woff';
import TildaSanLightdWOFF2 from '../assets/fonts/TildaSans-Light.woff2';
import TildaSanMediumEOT from '../assets/fonts/TildaSans-Medium.eot';
import TildaSanMediumWOFF from '../assets/fonts/TildaSans-Medium.woff';
import TildaSanMediumdWOFF2 from '../assets/fonts/TildaSans-Medium.woff2';
import TildaSanRegularEOT from '../assets/fonts/TildaSans-Regular.eot';
import TildaSanRegularWOFF from '../assets/fonts/TildaSans-Regular.woff';
import TildaSanRegulardWOFF2 from '../assets/fonts/TildaSans-Regular.woff2';
import TildaSanSemiboldEOT from '../assets/fonts/TildaSans-Semibold.eot';
import TildaSanSemiboldWOFF from '../assets/fonts/TildaSans-Semibold.woff';
import TildaSanSemibolddWOFF2 from '../assets/fonts/TildaSans-Semibold.woff2';

export const AppStyles = createGlobalStyle`


@font-face {
	font-family: 'TildaSans';
	src: url('TildaSans-Black.eot');
	src:
	     url(${TildaSanBlackEOT}) format('embedded-opentype'),
	     url(${TildaSanBlackWOFF}) format('woff2'),
	     url(${TildaSanBlackWOFF2}) format('woff');
  font-weight: 900;
}


@font-face {
	font-family: 'TildaSans';
	src: url('TildaSans-Bold.eot');
	src:
	     url(${TildaSanBoldEOT})  format('embedded-opentype'),
	     url(${TildaSanBoldWOFF})  format('woff2'),
	     url(${TildaSanBoldWOFF2})  format('woff');
	font-weight: bold;
}

@font-face {
	font-family: 'TildaSans';
	src: url('TildaSans-ExtraBold.eot');
	src:
	     url(${TildaSanExtraBoldEOT})  format('embedded-opentype'),
	     url(${TildaSanExtraBoldWOFF})  format('woff2'),
	     url(${TildaSanExtraBoldWOFF2})  format('woff');
	font-weight: 800;
}

@font-face {
	font-family: 'TildaSans';
	src: url('TildaSans-Light.eot');
	src:
	     url(${TildaSanLightEOT})  format('embedded-opentype'),
	     url(${TildaSanLightWOFF})  format('woff2'),
	     url(${TildaSanLightdWOFF2})  format('woff');
	font-weight: 300;
}

@font-face {
	font-family: 'TildaSans';
	src: url('TildaSans-Medium.eot');
	src:
	     url(${TildaSanMediumEOT})   format('embedded-opentype'),
	     url(${TildaSanMediumWOFF})   format('woff2'),
	     url(${TildaSanMediumdWOFF2})   format('woff');
	font-weight: 500;
}

@font-face {
	font-family: 'TildaSans';
	src: url('TildaSans-Regular.eot');
	src:
	     url(${TildaSanRegularEOT})  format('embedded-opentype'),
	     url(${TildaSanRegularWOFF})  format('woff2'),
	     url(${TildaSanRegulardWOFF2})  format('woff');
	font-weight: normal;
}

@font-face {
	font-family: 'TildaSans';
	src: url('TildaSans-Semibold.eot');
	src:
	     url(${TildaSanSemiboldEOT}) format('embedded-opentype'),
	     url(${TildaSanSemiboldWOFF}) format('woff2'),
	     url(${TildaSanSemibolddWOFF2}) format('woff');
	font-weight: 300;
}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    padding: 0;
    margin: 0;
    font-family: ${(props) => props.theme.font};
    color:${(props) => props.theme.textcolor};
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
    background-color:  ${(props) => props.theme.backgroundColor1};
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
`;
