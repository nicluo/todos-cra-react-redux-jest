import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import TodoList from './TodoList';

it('Renders initial state without crashing', () => {
  const component = shallow(
    <TodoList />
  );
  expect(shallowToJson(component)).toMatchSnapshot();
});