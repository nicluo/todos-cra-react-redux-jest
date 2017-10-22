import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';

class TodoItem extends Component {
  handleChange = (event) => {
    this.props.onChange(this.props.id, event.target.checked);
  };

  render() {
    const {completed, children} = this.props;

    return (
      <div className="TodoItem center mw-100 mw8-ns ba bw1 b--black-40 br2 mv3">
        <div className="flex items-center pa3 f4 f4-ns lh-copy">
          <input type="checkbox" className="Checkbox" checked={completed} onChange={this.handleChange} />
          <div className="dib">{children}</div>
        </div>
      </div>
    );
  }
}

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TodoItem;
