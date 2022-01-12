import { createGlobalStyle } from 'styled-components';

/**
 * Reponsive Breakpoints
 * - Extra small devices (portrait phones, less than 576px)
 * - Small devices (landscape phones, 640px and up)
 * - Medium devices (tablets, 768px and up)
 */
 
const GlobalStyle = createGlobalStyle`
  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }

  .container {
    margin: 0 auto;
  }

  @keyframes spin {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
  }
`;

export default GlobalStyle;