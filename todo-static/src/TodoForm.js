import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoForm extends Component {
  render() {
    const {input} = this.props;

    return (
      <div className="TodoForm center mw-100 mw8-ns ba bw1 b--black-40 br2 mv3">
        <form>
          <div className="flex items-center pa3 f4 f4-ns lh-copy">
            <button type="submit" className="SubmitButton f3 dt">
              <div className="Symbol dtc">+</div>
            </button>
            <input type="text" className="Input mw-100" value={input} />
          </div>
        </form>
      </div>
    );
  }
}

TodoForm.propTypes = {
  input: PropTypes.bool.isRequired,
};

export default TodoForm;
