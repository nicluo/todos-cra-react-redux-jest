import reducer from './rootReducer';

describe('RootReducer', () => {
  it('Should be a function', () => {
    expect(typeof(reducer)).toEqual('function');
  });
});
