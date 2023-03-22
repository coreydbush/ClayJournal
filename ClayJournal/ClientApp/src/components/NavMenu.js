import React, { Component, useState } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import ClayJournalLogo from '../Images/clayjournal-logo-long.svg';
import ClayJournalLogoDark from '../Images/clayjournal-logo-long-dark.svg';

import sunIcon from '../Images/sun-icon.png';
import moonIcon from '../Images/moon-icon.png';


function NavMenu(props) {

  const [collapsed, setCollapsed] = useState('true');

  return (
    <header>
      <div className="topNav">
        <div className="navbarBrandImg" tag={Link} to="/"><img src={ props.theme === 'light' ? ClayJournalLogoDark : ClayJournalLogo } alt="ClayJournal Logo"></img></div>
        <div className="divider"></div>
        <div navbar>
          <ul className="sideNav navbar-nav flex-grow">
            <li>
              <NavLink tag={Link} className="navLink" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink tag={Link} className="navLink" to="/profile">Profile</NavLink>
            </li>
            <li>
              <NavLink tag={Link} className="navLink" to="/upload">Upload</NavLink>
            </li>
            <li>
              <NavLink tag={Link} className="navLink" to="/logout">Login</NavLink>
            </li>
          </ul>
        </div>
        <div className="divider"></div>
      </div>
      <div className="bottomNav">
        <button className="themeSwitcher" onClick={props.handleThemeChange}><img src={ props.theme === 'light' ? moonIcon : sunIcon }/></button>
      </div>
    </header>
  );
};

export default NavMenu;