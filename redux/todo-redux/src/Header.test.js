import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Header from './Header';

it('Renders without crashing', () => {
  const component = shallow(
    <Header />
  );
  expect(shallowToJson(component)).toMatchSnapshot();
});
