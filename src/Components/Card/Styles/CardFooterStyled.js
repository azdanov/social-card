import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-left: 5.65rem;
  padding-left: 8px;
  position: relative;
  top: -25px;
`;

export const Action = styled.a`
  font-family: sans-serif;
  font-size: 1.2rem;
  line-height: 1rem;
  margin-left: 3rem;

  &:first-of-type {
    margin-left: 0;
  }

  &.secondary.action:hover {
    text-decoration: none;
  }
`;

export const Counter = styled.span`
  font-size: 0.9rem;
  line-height: 1.2rem;
`;
