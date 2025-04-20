import styled from 'styled-components';

export default styled.div`
  width: 100%;
  max-width: 300px;
  display: block;
  padding: var(--space-1) 0;

  div {
    position: relative;
    display: flex;
    width: 100%;
    transition: opacity 0.2s ease 0s;

    .true { opacity: 0.5; } //disabled = true

    input {
      box-sizing: border-box;
      appearance: none;
      outline: 0px;
      width: 100%;
      height: var(--space-12);
      padding: 0 var(--space-4);
      font-family: var(--fonts-default);
      font-size: var(--fontSizes-md);
      color: var(--colors-text-title);
      background-color: var(--colors-grey-900);
      border: 2px solid transparent;
      border-radius: var(--radii-sm);
      transition: border-color 0.2s ease 0s;
    }

    .error {
      border-color: var(--colors-danger-base);
    }
  }

  .hidded {
    position: absolute;
    top: -9999%; left: -9999%;
    max-width: 0 !important;
    max-height: 0 !important;
    padding: 0 0 !important;
  }
`;
