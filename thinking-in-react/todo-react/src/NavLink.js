import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavLink extends Component {
  render() {
    const {to, children} = this.props;
    return (
      <a className="link dim white dib mh3" href={to} title={children}>
        {children}
      </a>
    )
  }
}

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

export default NavLink;
