import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
    line-height: 1.6;
  }
  body {
    font-family: 'Roboto', sans-serif;
    position: relative;
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: #ccc;
  }
`;
