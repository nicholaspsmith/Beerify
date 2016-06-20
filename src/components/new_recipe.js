import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class NewRecipe extends Component {
  createRecipe() {
    const testRecipe = {
      id: 17,
      name: "New Special Test Beer!",
      ingredients: ['Starter Wort','Honey', 'Yeast' ,'Malt', 'Oats', 'Water', 'Cinnamon', "Grain"]
    }
    this.props.createRecipe()
  }

  render() {
    return (
      <div>
        <button onClick={this.createRecipe}>Create test recipe</button>
      </div>
    );
  }
}

export default connect(null, actions)(NewRecipe);
