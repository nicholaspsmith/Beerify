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
      <Navbar>
        <Navbar.Header className="col-sm-4">
          <Navbar.Brand>
            <Link to="/">
              <img src="/images/Logo_Full.png" alt="Beerify"/>
            </Link>
          </Navbar.Brand>
        </Navbar.Header>
        <ul className="pull-right nav navbar-nav">
          <li role="presentation">
            <Link to="/beers/new">New Recipe</Link>
          </li>
        </ul>
      </Navbar>
    );
  }
}

export default Header;
