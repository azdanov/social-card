// @flow
import styled from 'styled-components';

export const Wrapper = styled.div`
  &::after {
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

export const Arrow = styled.span`
  float: right;
  display: inline-block;
  font-size: 1.4rem;

  &.icon {
    line-height: 0.6;
  }

  color: lightgray;
  transition: color 100ms;

  &:hover {
    color: gray;
    cursor: pointer;
  }
`;
