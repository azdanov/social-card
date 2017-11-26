// @flow
import styled, { injectGlobal } from 'styled-components';
import icomoon from '../../../fonts/icomoon.woff';

injectGlobal`
  @font-face {
    font-family: 'icomoon';
    src: url('${icomoon}') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  .icon {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'icomoon' !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
  
    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  .icon-chevron-down::before {
    content: "\\f0a3";
  }
  
  .icon-comment::before {
    content: "\\f02b";
  }
  
  .icon-share::before {
    content: "\\f0ac";
  }
  
  .icon-heart::before {
    content: "\\2665";
  }
  
  .icon-mail::before {
    content: "\\f03b";
  }
 
`;
const Wrapper = styled.div`
  background-color: white;
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  margin: 10px auto;
  padding-right: 10px;
  border-radius: 5px;
  width: 600px;

  .primary:link {
    color: #64b5f6;
    text-decoration: none;
  }

  .primary:visited {
    color: #9575cd;
  }

  .primary:hover {
    color: #42a5f5;
    text-decoration: underline;
  }

  .secondary:link {
    color: #9e9e9e;
    text-decoration: none;
  }

  .secondary:visited {
    color: #b0bec5;
    text-decoration: none;
  }

  .secondary:hover {
    color: #757575;
    text-decoration: underline;
  }
`;
export default Wrapper;
