import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  render() {
    const {completed, children} = this.props;

    return (
      <div className="TodoItem center mw-100 mw8-ns ba bw1 b--black-40 br2 mv3">
        <div className="flex items-center pa3 f4 f4-ns lh-copy">
          <input type="checkbox" className="Checkbox" checked={completed} />
          <div className="dib">{children}</div>
        </div>
      </div>
    );
  }
}

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired
};

export default TodoItem;
