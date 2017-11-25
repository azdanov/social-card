// @flow
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  Wrapper,
  Message,
  Author,
  Embedded,
  Image,
} from './Styles/CardMainStyled';
import { type MainType } from './Card';

type Props = MainType;

function extractHashtag(propsMessage) {
  const match = propsMessage.match(/\S*#(?:\[[^\]]+]|\S+)/);
  let message;
  let hashtag;
  if (match) {
    // $FlowFixMe
    message = match.input.slice(0, match.index);
    [hashtag] = match;
    return [
      <span key={message}>{message}</span>,
      <a href="#" className="link" key={hashtag}>
        {hashtag}
      </a>,
    ];
  }
  return propsMessage;
}

const Main = (props: Props) => (
  <Wrapper>
    <Message>{extractHashtag(props.message)}</Message>

    {props.author && (
      <Author>
        <a href="#" className="link">
          @{props.author}
        </a>
      </Author>
    )}

    {props.payload.image && (
      <Embedded>
        <Image src={props.payload.image}>{}</Image>
      </Embedded>
    )}
  </Wrapper>
);

export default Main;
