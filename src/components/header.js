import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {
  Navbar,
  Button
} from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <Navbar className="main-navbar">
        <Navbar.Header className="col-sm-4">
          <Navbar.Brand>
            <Link to="/">
              <img src="/images/Logo_Full.png" alt="Beerify"/>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
      </Navbar>
    );
  }
}

export default Header;
