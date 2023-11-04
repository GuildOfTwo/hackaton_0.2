import styled, { createGlobalStyle } from "styled-components";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";

const AppWrapper = styled(Layout)`
  max-width: 1920px;
  display: flex;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
  min-height: 100vh;
`;

const ContentWrapper = styled(Content)`
  flex-grow: 1;
`;

export const Normalize = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    padding: 0;
    margin: 0;
    font: inherit;
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
    min-height: 100vh;
    text-rendering: optimizespeed;
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

export  { AppWrapper, ContentWrapper };
