import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import {
  FormGroup,
  FormControl
} from 'react-bootstrap';

class SearchBar extends Component {
  typing(e) {
    this.props.enterSearchTerm(e.target.value);
  }

  render() {
    return (
      <div className="col-sm-8 pull-right">
        <FormGroup>
          <FormControl onChange={this.typing.bind(this)} value={this.props.searchTerm} type="text" placeholder="Search Beers" className="search-bar" />
        </FormGroup>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchTerm: state.searchTerm
  }
}


export default connect(mapStateToProps, actions)(SearchBar);
