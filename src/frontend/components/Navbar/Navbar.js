import React, { Component } from 'react';
import { Link } from '../Router/Router';
import { toggleStickyNav } from '../../utils/toggleStickyNav.js';
import { goToTop } from 'react-scrollable-anchor';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Backdrop from '../Backdrop/Backdrop';
import './Navbar.css';

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: 'active' } : { className: 'header-link' };
};

export default class Navbar extends Component {
  state = {
    drawerOpen: false
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleNav);
  }

  handleNav = () => {
    toggleStickyNav();
  };

  toggleDrawer = () => {
    this.setState(prevState => {
      return { drawerOpen: !prevState.drawerOpen };
    });
  };

  render() {
    const { toggleDrawer } = this;
    const { drawerOpen } = this.state;

    return (
      <nav className="header-nav">
        <Sidebar display={drawerOpen} />
        {drawerOpen && <Backdrop toggleDrawer={toggleDrawer} />}
        <Header toggleDrawer={toggleDrawer} />
        <div className="nav-link-container">
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
            id="thoughts"
            to="/thoughts"
            onClick={goToTop}
          >
            Thoughts
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
        </div>
      </nav>
    );
  }
}
