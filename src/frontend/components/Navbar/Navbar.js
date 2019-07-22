import React, { Component } from 'react';
import { Link } from '../Router/Router';
import { toggleStickyNav } from '../../utils/toggleStickyNav.js';
import { goToTop } from 'react-scrollable-anchor';
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
          onClick={goToTop}
        >
          Home
        </Link>
        <Link
          getProps={isActive}
          className="header-link"
          id="blog"
          to="/blog"
          onClick={goToTop}
        >
          Blog
        </Link>
        <Link
          getProps={isActive}
          className="header-link"
          id="lifestyle"
          to="/lifestyle"
          onClick={goToTop}
        >
          Life + Style
        </Link>
        <Link
          getProps={isActive}
          className="header-link"
          id="travel"
          to="/travel"
          onClick={goToTop}
        >
          Travel
        </Link>
        <Link
          getProps={isActive}
          className="header-link"
          id="food"
          to="/food"
          onClick={goToTop}
        >
          Food
        </Link>
        <Link
          getProps={isActive}
          className="header-link"
          id="contact"
          to="/contact"
          onClick={goToTop}
        >
          Contact
        </Link>
      </nav>
    );
  }
}
