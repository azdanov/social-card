// @flow
import styled from 'styled-components';

export const Wrapper = styled.div`
  &:after {
    content: '';
    display: table;
    clear: both;
  }
  padding: 10px;
`;

export const Image = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  float: left;
  margin: auto 1rem auto auto;
`;

export const Name = styled.p`
  margin: 0 0 5px;
`;

export const Tag = styled.span`
  color: #9e9e9e;
  .link.secondary:link {
    color: inherit;
    text-decoration: none;
  }
  .link.secondary:visited {
    color: inherit;
    text-decoration: none;
  }
  .link.secondary:hover {
    color: #757575;
    text-decoration: underline;
  }
`;

export const Arrow = styled.span`
  float: right;
  margin-top: 2px;
  display: inline-block;
  transform: scale(2, 1);
  font-size: 1em;
  line-height: 1em;
  color: lightgray;
  transition: color 100ms;
  &:hover {
    color: gray;
    cursor: pointer;
  }
`;
