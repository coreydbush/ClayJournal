import React, { Component, useState } from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';

function Layout(props) {
  const [theme, setTheme] = useState("dark")
  const [displayName] = Layout.name;

  console.log('s', theme);
  
  let handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`app-wrapper ${theme}`}>
      <NavMenu handleThemeChange={handleThemeChange} theme={theme}/>
      <div tag="main" className="main container-fluid">
        {props.children}
      </div>
    </div>
  );
}

export default Layout;
