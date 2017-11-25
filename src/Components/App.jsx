// @flow
import React from 'react';
import faker from 'faker';
import Card from './Card/Card';

// Get random mock data

const link = {
  image: faker.image.image(),
  title: faker.random.words(),
  text: faker.random.words({ min: 5, max: 10 }),
  url: faker.internet.url(),
};

const mockData = {
  image: faker.internet.avatar(),
  name: faker.name.findName(),
  date: `${faker.date.month()} ${faker.random.number({ min: 1, max: 31 })}`,
  message: `${
    Math.random() < 0.5 ? faker.hacker.phrase() : faker.company.catchPhrase()
  } #${faker.helpers.slugify(faker.random.word())}`,
  author: `${Math.random() < 0.5 ? faker.internet.userName() : ''}`,
  payload: link,
};

const App = () => (
  <div>
    <Card data={mockData} />
  </div>
);

export default App;
