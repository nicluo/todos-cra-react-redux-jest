import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header class="Header bg-black-90 w-100 ph3 pv3 pv4-ns ph4-m ph5-l tc">
          <nav class="f6 fw6 ttu tracked">
            <a class="link dim white dib" href="#" title="Todo">Todo</a>
          </nav>
        </header>

        <div className="TodoList ph3 mv4">
          <div className="TodoItem center mw-100 mw8-ns ba bw1 b--black-40 br2 mv3">
            <div className="pa3 f4 f4-ns lh-copy">
              <input type="checkbox" checked />
              Start With A Mock
            </div>
          </div>
          <div className="TodoItem center mw-100 mw8-ns ba bw1 b--black-40 br2 mv3">
            <div className="pa3 f4 f4-ns lh-copy">
              <input type="checkbox" />
              Step 1: Break The UI Into A Component Hierarchy
            </div>
          </div>
          <div className="TodoItem center mw-100 mw8-ns ba bw1 b--black-40 br2 mv3">
            <div className="pa3 f4 f4-ns lh-copy">
              <input type="checkbox" />
              Step 2: Build A Static Version in React
            </div>
          </div>
          <div className="TodoForm center mw-100 mw8-ns ba bw1 b--black-40 br2 mv3">
            <div className="pa3 f4 f4-ns lh-copy">
              <form>
                <button type="submit" className="SubmitButton">
                  +
                </button>
                <input type="text" className="Input"/>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
