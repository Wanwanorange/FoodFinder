import React from 'react';
import ReactDOM from 'react-dom';
import PlacesToGo from './PlacesToGo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PlacesToGo />, div);
  ReactDOM.unmountComponentAtNode(div);
});
