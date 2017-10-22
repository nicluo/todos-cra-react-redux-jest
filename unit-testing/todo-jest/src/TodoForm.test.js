import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import TodoForm from './TodoForm';

it('Renders without crashing', () => {
  const input = "";
  const noop = () => {};

  const component = shallow(
    <TodoForm input={input} onChange={noop} onSubmit={noop} />
  );
  expect(shallowToJson(component)).toMatchSnapshot();
});

it('Input value changes with props provided', () => {
  const input = "test input";
  const noop = () => {};

  const component = shallow(
    <TodoForm input={input} onChange={noop} onSubmit={noop} />
  );
  expect(shallowToJson(component)).toMatchSnapshot();
});