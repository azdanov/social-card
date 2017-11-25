// @flow
import styled from 'styled-components';

export const Wrapper = styled.div`
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  margin: 10px auto;
  width: 600px;

  .link:link {
    color: #64b5f6;
    text-decoration: none;
  }
  .link:visited {
    color: #9575cd;
  }
  .link:hover {
    color: #42a5f5;
    text-decoration: underline;
  }
`;
