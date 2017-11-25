// @flow
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Wrapper, Image, Arrow, Name, Tag } from './Styles/CardHeaderStyled';
import shrinkName from '../../Utilities/shrinkName';
import { type HeaderType } from './Card';

type Props = HeaderType;

const Header = (props: Props) => (
  <Wrapper>
    <a href="#">
      <Image src={props.image} alt={props.name} />
    </a>
    <Name>
      {props.name}
      {
        <Tag>
          {' '}
          {
            <a href="#" className="link secondary">
              @{shrinkName(props.name)}
            </a>
          }{' '}
          &middot; {props.date}
        </Tag>
      }
      <Arrow>▽</Arrow>
    </Name>
  </Wrapper>
);

export default Header;
