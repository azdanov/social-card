// @flow
import React from 'react';
import { Wrapper, Action, Counter } from './Styles/CardFooterStyled';

const Footer = () => (
  <Wrapper>
    <Action href="" className="secondary action">
      <span className="icon icon-comment" /> <Counter>2</Counter>
    </Action>
    <Action href="" className="secondary action">
      <span className="icon icon-share" /> <Counter>49</Counter>
    </Action>
    <Action href="" className="secondary action">
      <span className="icon icon-heart" /> <Counter>10</Counter>
    </Action>
    <Action href="" className="secondary action">
      <span className="icon icon-mail" />
    </Action>
  </Wrapper>
);

export default Footer;
