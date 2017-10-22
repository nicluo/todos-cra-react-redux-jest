import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import NavLink from './NavLink';

it('Renders brand link correctly', () => {
  const component = shallow(
    <NavLink to="/">Todo</NavLink>
  );
  expect(shallowToJson(component)).toMatchSnapshot();
});

it('Renders another link correctly', () => {
  const component = shallow(
    <NavLink to="/archive">Archive</NavLink>
  );
  expect(shallowToJson(component)).toMatchSnapshot();
});
