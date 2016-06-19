import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';
import {
  Navbar,
  FormGroup,
  FormControl,
  Button
} from 'react-bootstrap';

class Header extends Component {
  typing(e) {
    this.props.enterSearchTerm(e.target.value);
  }

  render() {
    return (
      <Navbar className="main-navbar">
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Beerify</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullLeft>
            <FormGroup>
              <FormControl onChange={this.typing.bind(this)} value={this.props.searchTerm} type="text" placeholder="Search" className="search-bar" />
            </FormGroup>
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps, actions)(Header);
