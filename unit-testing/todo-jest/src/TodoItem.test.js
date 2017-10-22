import React from 'react';
import renderer from 'react-test-renderer';
import TodoItem from './TodoItem';

it('Renders empty children without crashing', () => {
  const noop = () => {};

  const component = renderer.create(
    <TodoItem id={1} completed={false} onChange={noop}></TodoItem>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('Displays item content passed as child string', () => {
  const noop = () => {};

  const component = renderer.create(
    <TodoItem id={1} completed={false} onChange={noop}>Task 1</TodoItem>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('Displays checked status when passed completed boolean', () => {
  const noop = () => {};

  const component = renderer.create(
    <TodoItem id={1} completed={false} onChange={noop}>Task 1</TodoItem>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
