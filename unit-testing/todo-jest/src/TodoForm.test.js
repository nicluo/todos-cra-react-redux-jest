import React from 'react';
import renderer from 'react-test-renderer';
import TodoForm from './TodoForm';

it('Renders without crashing', () => {
  const input = "";
  const noop = () => {};

  const component = renderer.create(
    <TodoForm input={input} onChange={noop} onSubmit={noop} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('Input value changes with props provided', () => {
  const input = "test input";
  const noop = () => {};

  const component = renderer.create(
    <TodoForm input={input} onChange={noop} onSubmit={noop} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});