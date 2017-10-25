import React from 'react';
import Header from './Header';
import TodoList from "./TodoList";
import './App.css';

const App = () => (
  <div className="App">
    <Header />
    <TodoList/>
  </div>
);

export default App;
