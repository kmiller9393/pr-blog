import React from 'react';
import { Link } from '../Router/Router';
import DrawerButton from '../DrawerButton/DrawerButton';
import instagram from '../../images/instagram.svg';
import facebook from '../../images/facebook.svg';
import linkedin from '../../images/linkedin.svg';
import './Header.css';

const Header = props => {
  return (
    <header className="home-header">
      <div className="title-link-container">
        <div className="header-link-container">
          <a
            href="https://www.instagram.com/kimaleentran/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="social-image" src={instagram} alt="instagram" />
          </a>
          <a
            href="https://www.linkedin.com/in/kimaleentran/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="social-image" src={linkedin} alt="linkedin" />
          </a>
          <a
            href="https://www.facebook.com/kimaleen.tran.3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="social-image" src={facebook} alt="facebook" />
          </a>
        </div>
        <h1 className="header-h1">
          <Link className="main-header-link" to="/">
            KIMALEEN
          </Link>
        </h1>
        <div className="header-filler" />
        <div className="menu-btn-container">
          <DrawerButton toggleDrawer={props.toggleDrawer} />
        </div>
      </div>
    </header>
  );
};

export default Header;
