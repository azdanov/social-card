// @flow
import React from 'react';
import Footer from './CardFooter';
import Header from './CardHeader';
import Main from './CardMain';
import { Wrapper } from './Styles/CardStyled';

export type HeaderType = {
  image: string,
  name: string,
  date: string,
};

export type MainType = {
  message: string,
  author: string,
  payload: {
    image: string,
    title: string,
    text: string,
    url: string,
  },
};

type PropsType = {
  data: HeaderType & MainType,
};

const Card = (props: PropsType) => (
  <Wrapper>
    <Header
      image={props.data.image}
      name={props.data.name}
      date={props.data.date}
    />
    <Main
      message={props.data.message}
      author={props.data.author}
      payload={props.data.payload}
    />
    <Footer />
  </Wrapper>
);

export default Card;
