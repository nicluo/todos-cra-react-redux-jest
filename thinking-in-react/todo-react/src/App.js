import React, { Component } from 'react';
import Header from './Header';
import TodoList from "./TodoList";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TodoList/>
      </div>
    );
  }
}

export default App;
