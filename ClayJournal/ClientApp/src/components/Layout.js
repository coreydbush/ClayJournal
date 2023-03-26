import React, { Component, useState } from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';
import useModal from './partials/hooks/useModal';
import Modal from './partials/Modal';
import ModalUpload from './partials/ModalUpload';


function Layout(props) {

  const [theme, setTheme] = useState("dark")
  const [displayName] = Layout.name;

  const [isShowingLogOut, setIsShowingLogOut] = useState(false);
  const [isShowingUpload, setIsShowingUpload] = useState(false);

  //const {isShowing, toggleLogOut} = useModal();
  const toggleLogOut = () => {
    setIsShowingLogOut(!isShowingLogOut);
  };

  const toggleUpload = () => {
    console.log('t');
    setIsShowingUpload(!isShowingUpload);
  };

  let handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`app-wrapper ${theme}`}>
      <NavMenu handleThemeChange={handleThemeChange} theme={theme} toggleLogOut={toggleLogOut} toggleUpload={toggleUpload}/>
      <div tag="main" className="main container-fluid">
        {props.children}
      </div>

      <Modal isShowingLogOut={isShowingLogOut} toggleLogOut={toggleLogOut} />
      <ModalUpload isShowingUpload={isShowingUpload} toggleUpload={toggleUpload} />
    </div>
  );
}

export default Layout;
