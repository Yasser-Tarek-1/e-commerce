import { css } from "styled-components";

export const sm = (props) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;
};

export const md = (props) => {
  return css`
    @media only screen and (max-width: 768px) {
      ${props}
    }
  `;
};

export const lg = (props) => {
  return css`
    @media only screen and (max-width: 1024px) {
      ${props}
    }
  `;
};

export const xl = (props) => {
  return css`
    @media only screen and (min-width: 1279px) {
      ${props}
    }
  `;
};
