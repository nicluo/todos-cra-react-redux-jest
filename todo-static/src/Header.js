import React, { Component } from 'react';
import NavLink from "./NavLink";

class Header extends Component {
  render() {
    return (
      <header className="Header bg-black-90 w-100 ph3 pv3 pv4-ns ph4-m ph5-l tc">
        <nav className="f6 fw6 ttu tracked">
          <NavLink to="/">Todo</NavLink>
        </nav>
      </header>
    )
  }
}

export default Header;
