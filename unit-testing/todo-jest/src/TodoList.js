import React, { Component } from 'react';
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const DEFAULT_STATE = {
  todos: [],
  input: ""
};

class TodoList extends Component {
  state = DEFAULT_STATE;

  handleInputChange = (event) => {
    this.setState({input: event.target.value});
  };

  handleSubmit = (event) => {
    this.setState((prevState) => {
      const newTodos = prevState.todos.slice();
      const todo = {
        // TODO: Generate better unique ids rather than using Math.random()
        id: Math.floor(Math.random() * 1000),
        title: prevState.input,
        completed: false
      };
      newTodos.push(todo);
      return {todos: newTodos, input: ''};
    });
    event.preventDefault();
  };

  handleTodoChange = (id, completed) => {
    this.setState((prevState) => {
      const newTodos = this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = completed
        }
        return todo;
      });
      return {todos: newTodos};
    });
  };

  render() {
    const {todos, input} = this.state;

    const todoListContent = todos.map((todo) => {
      return (<TodoItem key={todo.id} id={todo.id} completed={todo.completed} onChange={this.handleTodoChange}>{todo.title}</TodoItem>);
    });

    return (
      <div className="TodoList ph3 mv4">
        {todoListContent}
        <TodoForm onChange={this.handleInputChange} onSubmit={this.handleSubmit} input={input} />
      </div>
    );
  }
}

export default TodoList;
