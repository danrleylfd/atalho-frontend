import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
    font-family: var(--fonts-default);
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    font-family: var(--fonts-default);
    background-color: var(--colors-rocketseat-low);
  }
  :root {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
