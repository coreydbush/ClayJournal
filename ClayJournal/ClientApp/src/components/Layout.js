import React, { Component } from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div className="app-wrapper">
        <NavMenu />
        <div tag="main" className="main container-fluid">
          {this.props.children}
        </div>
      </div>
    );
  }
}
