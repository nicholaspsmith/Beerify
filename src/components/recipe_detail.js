import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import {
  Thumbnail,
  Button
} from 'react-bootstrap';

class RecipeDetail extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount() {
    this.props.fetchRecipes();
  }

  delete() {
    const filteredRecipes = this.props.recipes.filter( r => r.id != this.props.params.id );
    console.log(filteredRecipes);

    // @TODO call remove recipe action

    this.context.router.push('/');
  }

  render() {
    const id = this.props.params.id;

    const selectedRecipe = this.props.recipes.filter( rec => {
      if (rec.id == id) {
        return rec;
      }
     })[0];

    if (!selectedRecipe) {
      return <div>Loading...</div>
    }
    return (
      <Thumbnail src={selectedRecipe.imageUrl} alt="242x200">
        <h3>{selectedRecipe.name}</h3>
        <p>{selectedRecipe.ingredients.join(', ')}</p>
        <p>
          <Button bsStyle="danger" onClick={this.delete.bind(this)}>Delete</Button>&nbsp;
          <Button bsStyle="default">Edit</Button>
        </p>
      </Thumbnail>
    );
  }
}

function mapStateToProps(state) {
  return {
    recipes: state.recipes
  }
}

export default connect(mapStateToProps, actions)(RecipeDetail);
