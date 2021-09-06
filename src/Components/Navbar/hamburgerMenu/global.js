import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
@media only screen and (max-width: 768px) {
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {

    background: black;
    color: black;
  }
 
  a {
    color: black;
  }
}
`