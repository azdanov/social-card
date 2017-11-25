// @flow
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-left: 5.65rem;
  position: relative;
  top: -45px;
`;

export const Message = styled.p`
  margin: 0;
  line-height: 1.5;
  text-transform: capitalize;
`;

export const Author = styled.span`
  display: block;
  margin-top: 5px;
`;

export const Embedded = styled.div`
  margin-right: 5px;
  margin-top: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: inherit;
`;
