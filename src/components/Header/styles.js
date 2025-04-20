import styled from "styled-components"

export default styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  div {
    background-image: url("./logo192.png");
    background-size: cover;
    background-repeat: no-repeat;
    width: 7.5rem;
    height: 7.5rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span {
    color: #ffffff;
  }

  h1 {
    user-select: none;
  }

  p {
    color: #bbb;
    cursor: help;
  }
`
