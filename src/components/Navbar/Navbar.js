import React, { Component } from 'react';
import { Link } from '../Router/Router';
import { toggleStickyNav } from '../../utils/toggleStickyNav.js';

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: 'active' } : { className: 'header-link' };
};

export default class Navbar extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleNav);
  }

  handleNav = () => {
    toggleStickyNav();
  };

  render() {
    return (
      <nav className="header-nav">
        <Link getProps={isActive} className="header-link" id="home" to="/">
          Home
        </Link>
        <Link getProps={isActive} className="header-link" id="blog" to="/blog">
          Blog
        </Link>
        <Link
          getProps={isActive}
          className="header-link"
          id="contact"
          to="/contact"
        >
          Contact
        </Link>
      </nav>
    );
  }
}
