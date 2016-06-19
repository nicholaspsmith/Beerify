import React, { Component } from 'react';
import { Link } from 'react-router';
import {
  Navbar,
  FormGroup,
  FormControl,
  Button
} from 'react-bootstrap';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      typing: ''
    };
  }

  typing(e) {
    this.setState({
      typing: e.target.value
    });
  }

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Beerify</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullLeft>
            <FormGroup>
              <FormControl onInput={this.typing.bind(this)} value={this.state.typing} type="text" placeholder="Search" className="search-bar" />
            </FormGroup>
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
