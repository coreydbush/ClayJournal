import React, { Component, useState, } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import ClayJournalLogo from '../Images/clayjournal-logo-long.svg';
import ClayJournalLogoDark from '../Images/clayjournal-logo-long-dark.svg';

import sunIcon from '../Images/sun-icon.png';
import moonIcon from '../Images/moon-icon.png';
import { useLocation } from "react-router-dom";

function NavMenu(props) {
  const location = useLocation();

  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <header>
      <div className="topNav">
        <div className="navbarBrandImg" tag={Link} to="/"><img src={ props.theme === 'light' ? ClayJournalLogoDark : ClayJournalLogo } alt="ClayJournal Logo"></img></div>
        <div className="divider"></div>
        <div navbar>
          <ul className="sideNav navbar-nav flex-grow">
            <li className={splitLocation[1] === "" ? "active" : ""}>
              <NavLink tag={Link} className="navLink" to="/">Home</NavLink>
            </li>
            <li className={splitLocation[1] === "browse" ? "active" : ""}>
              <NavLink tag={Link} className="navLink" to="/browse">Browse</NavLink>
            </li>
            <li className={splitLocation[1] === "mypots" ? "active" : ""}>
              <NavLink tag={Link} className="navLink" to="/mypots">My Pots</NavLink>
            </li>
            <li className={splitLocation[1] === "upload" ? "active" : ""}>
              <NavLink tag={Link} className="navLink" to="/upload">Upload</NavLink>
            </li>
            <li className={splitLocation[1] === "logout" ? "active" : ""}>
              <NavLink className="navLink modalLink" onClick={props.toggleLogOut}>Logout</NavLink>
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