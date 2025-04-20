import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`

  #tsparticles {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    top: 0;
    left: 0;
  }

  main {
    position: absolute;
    top: 0; bottom: 0;
    left: 0; right: 0;
    margin: auto;
    max-width: 25rem;
    max-height: 33rem;
    background-color: #00000083;
    border-radius: 8px;

    .content-box {
      position: absolute;
      top: 0; bottom: 0;
      left: 0; right: 0;
      margin: auto;

      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      text-align: center;

      form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;

        p {
          color: #bbb;
          cursor: help;
        }
      }

      section {
        width: 100%;
        height: 33%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        overflow: auto;

        article {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          background-color: #ffffff33;
          color: #bbb;
          width: 75%;
          margin: var(--space-1) 0;
          padding: var(--space-2) 0;
          border-radius: var(--space-4);

          span {
            padding: 0 var(--space-2);
            color: #FFEB3B;
            user-select: none;
          }
        }
      }
    }
  }

  .footerLink {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
`
