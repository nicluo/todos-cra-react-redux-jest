import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="Header bg-black-90 w-100 ph3 pv3 pv4-ns ph4-m ph5-l tc">
          <nav className="f6 fw6 ttu tracked">
            <a className="link dim white dib" href="#" title="Todo">Todo</a>
          </nav>
        </header>

        <div className="TodoList ph3 mv4">
          <div className="TodoItem center mw-100 mw8-ns ba bw1 b--black-40 br2 mv3">
            <div className="flex items-center pa3 f4 f4-ns lh-copy">
              <input type="checkbox" className="Checkbox" checked />
              <div className="dib">Start With A Mock</div>
            </div>
          </div>
          <div className="TodoItem center mw-100 mw8-ns ba bw1 b--black-40 br2 mv3">
            <div className="flex items-center pa3 f4 f4-ns lh-copy">
              <input type="checkbox" className="Checkbox" />
              <div className="dib">Step 1: Break The UI Into A Component Hierarchy</div>
            </div>
          </div>
          <div className="TodoItem center mw-100 mw8-ns ba bw1 b--black-40 br2 mv3">
            <div className="flex items-center pa3 f4 f4-ns lh-copy">
              <input type="checkbox" className="Checkbox" />
              <div className="dib">Step 2: Build A Static Version in React</div>
            </div>
          </div>
          <div className="TodoForm center mw-100 mw8-ns ba bw1 b--black-40 br2 mv3">
            <form>
              <div className="flex items-center pa3 f4 f4-ns lh-copy">
                <button type="submit" className="SubmitButton f3 dt">
                  <div className="Symbol dtc">+</div>
                </button>
                <input type="text" className="Input mw-100"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
