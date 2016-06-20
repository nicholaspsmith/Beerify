import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {
  Navbar,
  NavItem,
  Nav,
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
        </Navbar.Header>
        <ul className="pull-right nav navbar-nav" data-reactid=".0.0.0.1">
          <li role="presentation" data-reactid=".0.0.0.1.$0/=10">
            <a href="/beers/new" data-reactid=".0.0.0.1.$0/=10.0.0">New Recipe</a>
          </li>
        </ul>
      </Navbar>
    );
  }
}

export default Header;
