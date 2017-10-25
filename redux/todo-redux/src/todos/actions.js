import { v4 as uuid } from 'uuid';
import * as t from './actionTypes';

export const add = (text) => {
  const id = uuid();
  return {
    type: t.ADD,
    payload: { id, text }
  };
};

export const toggle = (id) => ({
  type: t.TOGGLE,
  payload: { id }
});
