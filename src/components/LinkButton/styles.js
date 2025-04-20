import styled from 'styled-components';

export default styled.a`
  height: 1.25rem;
  font-family: var(--fonts-default);
  font-size: var(--fontSizes-sm);
  color: #996DFF;
  background-color: transparent;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
  transition: color 0.2s ease 0s;
  transition-property: color;
  transition-duration: 0.2s;
  transition-timing-function: ease;
  transition-delay: 0s;
  transition: color 0.2s ease 0s;
  text-transform: unset;

  :hover { text-decoration: underline; }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: unset;

    span {
      position: relative;

      :before {
        content: "";
        position: absolute;
        bottom: 0px;
        left: 0px;
        width: 0px;
        height: 1px;
        transition: width 0.2s ease 0s;
        background-color: #996DFF;
      }
    }
  }
`;
