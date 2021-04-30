
import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <div className="App">
        <BrowserRouter>
          <h2>Recepes calalogue</h2>
        </BrowserRouter>
      </div>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
