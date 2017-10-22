import React, { Component } from 'react';
import Header from './Header';
import './App.css';
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

class TodoList extends Component {
  render() {
    return (
      <div className="TodoList ph3 mv4">
        <TodoItem/>
        <TodoForm/>
      </div>
    );
  }
}

export default TodoList;
