import faker from 'faker';

export default function mockData(times = 3) {
  const mocks = [];

  for (let i = 0; i < times; i++) {
    mocks.push({
      id: faker.random.uuid(),
      image: faker.internet.avatar(),
      name: faker.name.findName(),
      date: `${faker.date.month()} ${faker.random.number({ min: 1, max: 31 })}`,
      message: `${
        Math.random() < 0.5
          ? faker.hacker.phrase()
          : faker.company.catchPhrase()
      } #${faker.helpers.slugify(faker.random.word())}`,
      author: `${Math.random() < 0.5 ? faker.internet.userName() : ''}`,
      payload: {
        image: Math.random() < 0.5 ? faker.image.image() : faker.random.image(),
        title: faker.random.words(),
        text: faker.random.words(faker.random.number({ min: 5, max: 19 })),
        url: faker.internet.url(),
      },
    });
  }
  return mocks;
}
