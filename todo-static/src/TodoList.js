import React, { Component } from 'react';
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const TODOS = [
  {title: "Start With A Mock", completed: true},
  {title: "Step 1: Break The UI Into A Component Hierarchy", completed: true},
  {title: "Step 2: Build A Static Version in React", completed: true},
  {title: "Step 3: Identify The Minimal (but complete) Representation Of UI State", completed: false},
];

const INPUT = "New Todo Item";

class TodoList extends Component {
  state = {
    todos: TODOS,
    input: INPUT
  };

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
