import * as types from '../ActionTypes';
import reducer from '../reducer';

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      items: [],
      input: ""
    });
  });

  it('should handle ADD', () => {
    expect(
      reducer(undefined, {
        type: types.ADD,
        payload: {
          text: 'test item',
          id: 1
        }
      })
    ).toEqual({
      items: [
        {
          text: 'test item',
          completed: false,
          id: 1
        }
      ],
      input: ''
    });

    expect(
      reducer({
          items: [
            {
              text: 'test item',
              completed: false,
              id: 1
            }
          ],
          input: ''
        },
        {
          type: types.ADD,
          payload: {
            text: 'test item 2',
            id: 2
          }
        }
      )
    ).toEqual({
      items: [
        {
          text: 'test item',
          completed: false,
          id: 1
        },
        {
          text: 'test item 2',
          completed: false,
          id: 2
        }
      ],
      input: ''
    });
  });

  it('should handle TOGGLE', () => {
    expect(
      reducer({
        items: [
          {
            text: 'test item',
            completed: false,
            id: 1
          }
        ],
        input: ''
      }, {
        type: types.TOGGLE,
        payload: {
          id: 1
        }
      })
    ).toEqual({
      items: [
        {
          text: 'test item',
          completed: true,
          id: 1
        }
      ],
      input: ''
    });
  });
});