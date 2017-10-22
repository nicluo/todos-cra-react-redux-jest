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
      newTodos.push({title: prevState.input, completed: false});
      return {todos: newTodos, input: ''};
    });
    event.preventDefault();
  };

  render() {
    const {todos, input} = this.state;

    const todoListContent = todos.map(function(todo) {
      return (<TodoItem completed={todo.completed}>{todo.title}</TodoItem>);
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
