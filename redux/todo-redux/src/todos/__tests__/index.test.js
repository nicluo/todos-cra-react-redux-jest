import todos from '../';

describe('Todos', () => {
  it('Should have reducer', () => {
    expect(typeof(todos.reducer)).toEqual('function');
  });

  it('Should have actions', () => {
    expect(typeof(todos.actions)).toEqual('object');
  });

  it('Should have actions', () => {
    expect(typeof(todos.constants)).toEqual('object');
  });
});