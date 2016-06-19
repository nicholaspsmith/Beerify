import React, { Component } from 'react';

export default class RecipeDetail extends Component {
  render() {
    return (
      <div>Beer: {this.props.params.id}</div>
    );
  }
}
