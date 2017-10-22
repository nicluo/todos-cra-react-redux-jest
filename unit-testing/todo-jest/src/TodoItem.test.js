import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import sinon from 'sinon';
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

it('Calls onChange when checkbox is clicked', () => {
  const onChange = sinon.spy();
  const component = shallow(
    <TodoItem id={1} completed={false} onChange={onChange}>Task 1</TodoItem>
  );
  component.find('input[type="checkbox"]').simulate('change', { target: { checked: true } });
  expect(onChange.calledOnce).toEqual(true);
});

it('Calls onChange when checkbox is clicked when already completed', () => {
  const onChange = sinon.spy();
  const component = shallow(
    <TodoItem id={1} completed={true} onChange={onChange}>Task 1</TodoItem>
  );
  component.find('input[type="checkbox"]').simulate('change', { target: { checked: false } });
  expect(onChange.calledOnce).toEqual(true);
});
