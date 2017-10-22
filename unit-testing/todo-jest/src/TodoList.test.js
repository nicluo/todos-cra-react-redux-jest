import React from 'react';
import renderer from 'react-test-renderer';
import TodoList from './TodoList';

it('Renders initial state without crashing', () => {
  const component = renderer.create(
    <TodoList />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});