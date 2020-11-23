import { createGlobalStyle } from 'styled-components';

import AuroraSemiB from '../assets/fonts/aurora/aileron-semibold.ttf';
import AuroraBold from '../assets/fonts/aurora/aileron-bold.ttf';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

 

  body {
    -webkit-font-smoothing: antialiased !important;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }


  @font-face {
    font-family: AuroraSemiBold;
    src: url(${AuroraSemiB});
  }

  @font-face {
    font-family: AuroraBold;
    src: url(${AuroraBold});
  }
`;
