import React, { Component } from 'react';
import { Link } from '../Router/Router';
import { toggleStickyNav } from '../../utils/toggleStickyNav.js';
import scrollToTop from '../../utils/scrollToTop';
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
          onClick={scrollToTop}
        >
          Home
        </Link>
        <Link
          getProps={isActive}
          className="header-link"
          id="blog"
          to="/blog"
          onClick={scrollToTop}
        >
          Blog
        </Link>
        <Link
          getProps={isActive}
          className="header-link"
          id="lifestyle"
          to="/lifestyle"
          onClick={scrollToTop}
        >
          Life + Style
        </Link>
        <Link
          getProps={isActive}
          className="header-link"
          id="travel"
          to="/travel"
          onClick={scrollToTop}
        >
          Travel
        </Link>
        <Link
          getProps={isActive}
          className="header-link"
          id="food"
          to="/food"
          onClick={scrollToTop}
        >
          Food
        </Link>
        <Link
          getProps={isActive}
          className="header-link"
          id="contact"
          to="/contact"
          onClick={scrollToTop}
        >
          Contact
        </Link>
      </nav>
    );
  }
}
