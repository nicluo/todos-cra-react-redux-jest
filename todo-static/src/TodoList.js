import React, { Component } from 'react';
import Header from './Header';
import './App.css';
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const TODOS = [
  {title: "Start With A Mock", completed: true},
  {title: "Step 1: Break The UI Into A Component Hierarchy", completed: true},
  {title: "Step 2: Build A Static Version in React", completed: true},
  {title: "Step 3: Identify The Minimal (but complete) Representation Of UI State", completed: false},
];

const TODOFORM = {
  input: "New Todo Item"
};

class TodoList extends Component {
  render() {
    return (
      <div className="TodoList ph3 mv4">
        {TODOS.map(function(todo){
          return (<TodoItem completed={todo.completed}>{todo.title}</TodoItem>);
        })}
        <TodoForm input={TODOFORM.input} />
      </div>
    );
  }
}

export default TodoList;
