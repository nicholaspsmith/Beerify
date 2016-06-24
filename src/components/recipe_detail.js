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

  componentDidUpdate() {
    const id = this.props.params.id;
    const selectedRecipe = this.props.recipes.filter( rec => {
      if (rec.id == id) {
        return rec;
      }
     });
    if (selectedRecipe.length == 0) {
      this.context.router.push("/")
    }
  }

  delete() {
    console.log("delete");
    const filteredRecipes = this.props.recipes.filter( r => r.id != this.props.params.id );

    // remove this recipe from our app state
    this.props.deleteRecipe(this.props.params.id);

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
      <div className="container">
        <Thumbnail src={selectedRecipe.imageUrl} className="clearfix">
          <h3>{selectedRecipe.name}</h3>

          <p><strong>Ingredients:</strong> {selectedRecipe.ingredients.join(', ')}</p>
          <p>
            <Button bsStyle="danger" onClick={this.delete.bind(this)}>Delete</Button>&nbsp;
            { /* <Button bsStyle="default">Edit</Button> */ }
          </p>
        </Thumbnail>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    recipes: state.recipes
  }
}

export default connect(mapStateToProps, actions)(RecipeDetail);
