import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    min-height: 100vh;
    font-family: ${({ theme }) => theme.fonts.poppins}, sans-serif;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.black};
  }
a{
  text-decoration:inherit;
  color: inherit

}

  /* Inherit font for input and button */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::after,
    *::before {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
 /* Overwrite rc-slider library default styles */
 .rc-slider-handle-dragging {
    box-shadow: 0 0 0 5px ${({ theme }) => theme.colors.white} !important;
  }
`;
