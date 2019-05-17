import React from 'react';
import { Link } from './Router';
import { withSiteData } from 'react-static';

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: 'active' } : { className: 'header-link' };
};

export default withSiteData(({ title }) => (
  <header className="header">
    <h1 className="header-h1">{title}</h1>
    <nav className="header-nav">
      <Link getProps={isActive} className="header-link" id="home" to="/">
        Home
      </Link>
      <Link getProps={isActive} className="header-link" id="about" to="/about">
        About
      </Link>
      <Link getProps={isActive} className="header-link" id="blog" to="/blog">
        Blog
      </Link>
    </nav>
  </header>
));
