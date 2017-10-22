import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    return (
        <div className="TodoItem center mw-100 mw8-ns ba bw1 b--black-40 br2 mv3">
          <div className="flex items-center pa3 f4 f4-ns lh-copy">
            <input type="checkbox" className="Checkbox" />
            <div className="dib">Step 1: Break The UI Into A Component Hierarchy</div>
          </div>
        </div>
    );
  }
}

export default TodoItem;
