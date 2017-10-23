import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

it('Renders initial state without crashing', () => {
  const component = shallow(
    <TodoList />
  );
  expect(shallowToJson(component)).toMatchSnapshot();
});

it('Should have a TodoForm item', () => {
  const component = shallow(
    <TodoList />
  );
  expect(component.find(TodoForm).length).toEqual(1);
});

it('Should update state input when TodoForm is changed', () => {
  let value = 'test value';
  const component = shallow(
    <TodoList />
  );
  component.find(TodoForm).simulate('change', {target: {value: value}});
  expect(component.state('input')).toEqual(value);
});

it('Should create a new TodoItem when handleSubmit is called', () => {
  const component = shallow(
    <TodoList />
  );
  component.find(TodoForm).simulate('submit', {preventDefault: () => {}});
  expect(component.find(TodoItem).length).toEqual(1);
});

it('Should update state todos in state when handleTodoChange is called', () => {
  let state = {
    todos: [
      {id: 1, title: 'test item', completed: false},
      {id: 2, title: 'test item', completed: false}
      ],
    input: ''
  };
  const component = shallow(
    <TodoList />
  );
  component.setState(state);
  component.find(TodoItem).first().simulate('change', 1, true);
  expect(component.state('todos')[0].completed).toEqual(true);
  expect(component.state('todos')[1].completed).toEqual(false);
});
