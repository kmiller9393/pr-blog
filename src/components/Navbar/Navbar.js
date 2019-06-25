import React, { Component } from 'react';
import { Link } from '../Router/Router';
import { toggleStickyNav } from '../../utils/toggleStickyNav.js';
import './Navbar.css';

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
        <span className="logo">K</span>
        <Link
          getProps={isActive}
          className="header-link"
          id="home"
          to="/"
          onClick={() => window.scrollTo(0, 0)}
        >
          Home
        </Link>
        <Link
          getProps={isActive}
          className="header-link"
          id="blog"
          to="/blog"
          onClick={() => window.scrollTo(0, 0)}
        >
          Blog
        </Link>
        <Link
          getProps={isActive}
          className="header-link"
          id="contact"
          to="/contact"
          onClick={() => window.scrollTo(0, 0)}
        >
          Contact
        </Link>
      </nav>
    );
  }
}
