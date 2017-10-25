import * as actions from '../actions';
import * as types from '../actionTypes';

describe('Actions', () => {
  it('Should create an action to add a todo', () => {
    const text = 'test input';
    expect(actions.add(text).type).toEqual(types.ADD);
    expect(actions.add(text).payload.id).toBeTruthy();
    expect(actions.add(text).payload.text).toEqual(text);
  });

  it('Should create an action to toggle a todo', () => {
    expect(actions.toggle(1).type).toEqual(types.TOGGLE);
    expect(actions.toggle(1).payload.id).toEqual(1);
  });
});