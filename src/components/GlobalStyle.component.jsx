import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }

  button {
    font-weight: bold;
    cursor: pointer;
  }

  img {
    margin: auto;
    display: flex;
    border-radius: 4px 4px 0 0;
    max-width: 100%;
  }

  h6 {
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0.15px;
    color: rgba(0, 0, 0, 0.87);
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.25px;
    color: rgba(0, 0, 0, 0.6);
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
  }

  a {
    display: flex;
    justify-content: start;
  }
`;

export default GlobalStyle;
