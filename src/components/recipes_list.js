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
    const recipes = this.props.recipes;

    // Only show names of recipes if they match name entered in searchbar
    const searchedRecipes = recipes.map( recipe => {
      if (recipe.name.toLowerCase().indexOf(this.props.searchTerm.toLowerCase()) > -1) {
        return recipe;
      }
    }).filter( r => typeof r !== 'undefined')

    // only show recipes that have all ingredients in filter
    const filters = this.props.filters;

    const filteredRecipes = searchedRecipes.filter( recipe => {
      const LENGTH = _.intersection(filters,recipe.ingredients).length
      return filters.length === LENGTH
    } )

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
