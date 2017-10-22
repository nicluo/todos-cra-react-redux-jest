import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

it('Renders without crashing', () => {
  const component = renderer.create(
    <App />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});