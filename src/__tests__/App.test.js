import React from 'react';
import renderer from 'react-test-renderer';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
