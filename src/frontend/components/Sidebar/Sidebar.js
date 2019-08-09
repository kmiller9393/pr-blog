import React from 'react';
import { Link } from '../Router/Router';
import { goToTop } from 'react-scrollable-anchor';
import './Sidebar.css';

const Sidebar = props => {
  let barClassName = 'sidebar';

  if (props.display) {
    barClassName = 'sidebar open';
  }

  return (
    <nav className={barClassName}>
      <ul>
        <li>
          <Link to="/" onClick={goToTop}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/blog" onClick={goToTop}>
            Blog
          </Link>
        </li>
        <li>
          <Link to="/thoughts" onClick={goToTop}>
            Thoughts
          </Link>
        </li>
        <li>
          <Link to="/lifestyle" onClick={goToTop}>
            Life + Style
          </Link>
        </li>
        <li>
          <Link to="/travel" onClick={goToTop}>
            Travel
          </Link>
        </li>
        <li>
          <Link to="/food" onClick={goToTop}>
            Food
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={goToTop}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
