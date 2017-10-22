import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import App from './App';

it('Renders without crashing', () => {
  const component = shallow(
    <App />
  );
  expect(shallowToJson(component)).toMatchSnapshot();
});