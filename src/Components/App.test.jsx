// @flow
import React from 'react';
import { configure, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';

import App from './App';

configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = render(<App />);

    expect(wrapper).toMatchSnapshot();
  });
});
