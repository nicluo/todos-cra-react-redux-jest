import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import TodoItem from './TodoItem';

it('Renders empty children without crashing', () => {
  const noop = () => {};

  const component = shallow(
    <TodoItem id={1} completed={false} onChange={noop}></TodoItem>
  );
  expect(shallowToJson(component)).toMatchSnapshot();
});

it('Displays item content passed as child string', () => {
  const noop = () => {};

  const component = shallow(
    <TodoItem id={1} completed={false} onChange={noop}>Task 1</TodoItem>
  );
  expect(shallowToJson(component)).toMatchSnapshot();
});

it('Displays checked status when passed completed boolean', () => {
  const noop = () => {};

  const component = shallow(
    <TodoItem id={1} completed={false} onChange={noop}>Task 1</TodoItem>
  );
  expect(shallowToJson(component)).toMatchSnapshot();
});
