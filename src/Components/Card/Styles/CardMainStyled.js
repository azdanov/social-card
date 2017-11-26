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
`;

export const Author = styled.span`
  display: block;
  margin-top: 5px;
`;

export const Embedded = styled.div`
  margin-right: 5px;
  margin-top: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 11px;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: scale-down;
  border-radius: 10px 10px 0 0;
`;

export const Header = styled.h2`
  font-size: 1rem;
  margin: 15px 15px 10px;
`;

export const Text = styled.p`
  margin: 0 15px 15px;
  font-size: 0.9rem;
  line-height: 1.4;
`;

export const URL = styled.a`
  margin: 0 15px 20px;
  font-size: 0.9rem;
  display: inline-block;
`;
