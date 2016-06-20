import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router'
import {
  Panel,
  Media
} from 'react-bootstrap';

class RecipesList extends Component {
  componentWillMount() {
    this.props.fetchRecipes();
  }

  filterAndRenderRecipes() {
    // if we have some filters in our filter array,
    // then only show the recipes that contain all of them

    const filters = this.props.filters;
    const recipes = this.props.recipes;

    const searchedRecipes = recipes.map( recipe => {
      if (recipe.name.toLowerCase().indexOf(this.props.searchTerm.toLowerCase()) > -1) {
        return recipe;
      }
    }).filter( r => typeof r !== 'undefined')

    const filteredRecipes = searchedRecipes.map( recipe => {
      var result = filters.filter( filter => {
        return recipe.ingredients.some( ingredient => {
          return filter.indexOf(ingredient) > -1
        });
      });
      if (result.length === filters.length) {
        return recipe;
      }
    }).filter( r => typeof r !== 'undefined')

    if (filteredRecipes.length === 0) {
      return <h3>No Results Found</h3>
    }
    return filteredRecipes.map(this.renderRecipe)
  }

  renderRecipe(recipe) {
    return (
        <Panel key={recipe.id}>
          <Media>
            <Media.Left align="middle">
              <img width={64} height={64} src={recipe.imageUrl} alt="Image"/>
            </Media.Left>
            <Media.Body>
              <Link to={"/beers/" + recipe.id} key={recipe.id}>
                <Media.Heading>{recipe.name}</Media.Heading>
                {recipe.ingredients.join(", ")}
              </Link>
            </Media.Body>
          </Media>
        </Panel>
    )
  }

  render() {
    if (this.props.recipes.length === 0) {
      return <div>Loading...</div>
    }
    return (
      <Panel header="Beer List">
        {this.filterAndRenderRecipes()}
      </Panel>
    );
  }
}

function mapStateToProps(state) {
  return {
    recipes: state.recipes,
    filters: state.filters,
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps, actions)(RecipesList);
