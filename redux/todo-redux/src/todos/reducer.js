import * as t from './actionTypes';

const defaultState = {
  items: [],
  input: "",
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case t.ADD: {
      let newItem = {
        id: action.payload.id,
        text: action.payload.text,
        completed: false
      };
      return {
        items: [...state.items, newItem],
        input: state.input
      };
    }
    case t.TOGGLE:
      return {
        items: state.items.map((item) => ({
          ...item,
          completed: (item.id === action.payload.id ? !item.completed : item.completed)
        })),
        input: state.input
      };
    default:
      return state;
  }
};