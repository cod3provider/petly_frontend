import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Manrope', sans-serif;
    background: #FEF9F9;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }
  
  a {
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
  
  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  button {
    cursor: pointer;
    border: none;
  }
  
`;

export default GlobalStyles;