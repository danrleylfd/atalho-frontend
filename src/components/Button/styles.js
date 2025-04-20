import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: center;
  padding-top: var(--space-1);

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border: 1px solid transparent;
    border-radius: var(--radii-sm);
    font-family: var(--fonts-default);
    font-weight: var(--fontWeights-bold);
    cursor: pointer;
    transition: background 0.2s ease 0s, box-shadow 0.2s ease 0s;

    :disabled {
      cursor: not-allowed;
      opacity: var(--opacity-medium);
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
    }

  }

  .primary {
    background-color: var(--colors-rocketseat-mid);
    color: var(--colors-white) !important;

    :hover {
      background-color: var(--colors-rocketseat-light);
    }
  }

  .secondary {
    background-color: var(--colors-shape-secondary);
    color: var(--colors-text-title) !important;

    :hover {
      background-color: var(--colors-shape-tertiary);
    }
  }

  .tertiary {
    background-color: transparent;
    color: var(--colors-text-title) !important;

    :hover {
      background-color: var(--colors-shape-secondary);
    }
  }

  .success {
    background-color: var(--colors-shape-secondary);
    color: var(--colors-success-light) !important;

    :hover {
      background-color: var(--colors-shape-tertiary);
    }
  }

  .warning {
    background-color: var(--colors-shape-secondary);
    color: var(--colors-warning-light) !important;

    :hover {
      background-color: var(--colors-shape-tertiary);
    }
  }

  .danger {
    background-color: var(--colors-shape-secondary);
    color: var(--colors-danger-light) !important;

    :hover {
      background-color: var(--colors-shape-tertiary);
    }
  }

  .sm {
    height: var(--space-8);
    padding: 0 var(--space-4);
    font-size: var(--fontSizes-xs);
  }

  .md {
    height: var(--space-10);
    padding: 0 var(--space-6);
  }

  .lg {
    height: var(--space-12);
    padding: 0 var(--space-8);
  }
`;
