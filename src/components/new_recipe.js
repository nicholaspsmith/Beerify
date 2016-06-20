import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class NewRecipe extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount() {
    this.props.fetchRecipes();
  }

  createRecipe() {
    const testRecipe = {
      id: 17,
      name: "New Special Test Beer!",
      ingredients: ['Starter Wort','Honey', 'Yeast' ,'Malt', 'Oats', 'Water', 'Cinnamon', "Grain"],
      imageUrl: "http://png.clipart.me/graphics/thumbs/159/glass-beer-brown-bottle-with-label-on-white-background-isolated-ready-for-your-design-product-packing-vector-eps10_159254543.jpg"
    }
    this.props.createRecipe(testRecipe);
    this.context.router.push("/");
  }

  render() {
    return (
      <div>
        <button onClick={this.createRecipe.bind(this)}>Create test recipe</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    recipes: state.recipes
  }
}

export default connect(mapStateToProps, actions)(NewRecipe);
