import React from 'react';
import menu from '../../images/menu.svg';
import './DrawerButton.css';

const DrawerButton = props => (
  <button className="home-menu-button" onClick={props.toggleDrawer}>
    <img src={menu} alt="menu" />
  </button>
);

export default DrawerButton;
