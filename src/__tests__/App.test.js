import React from 'react';
import renderer from 'react-test-renderer';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Header from '../components/Header';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <div className="App">
        <Router>
          <Header />
        </Router>
      </div>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
