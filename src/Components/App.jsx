// @flow
import React from 'react';
import Card from './Card/Card';
import mockData from '../Utilities/mockData';

const App = () => mockData().map(data => <Card key={data.id} data={data} />);

export default App;
