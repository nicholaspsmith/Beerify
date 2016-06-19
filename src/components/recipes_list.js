import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router'
import {
  Panel,
  Button,
  Nav,
  Media
} from 'react-bootstrap';

class RecipesList extends Component {
  componentWillMount() {
    this.props.fetchRecipes();
  }

  filterAndRenderRecipes() {
    // if we have some filters in our filter array,
    // then only show the recipes that contain all of them

    // ["Hops","Water"] // filters
    // [ 'Hops', 'Oats', 'Water', "Grain"] // a recipe's ingredients

    const filters = this.props.filters;
    const recipes = this.props.recipes;

    const searchedRecipes = recipes.map( recipe => {
      if (recipe.name.toLowerCase().indexOf(this.props.searchTerm.toLowerCase()) > -1) {
        return recipe;
      }
    }).filter( r => typeof r !== 'undefined')

    const filteredRecipes = searchedRecipes.map( recipe => {
      var result = filters.filter(function(fs) {
        return recipe.ingredients.some(function(ff) { return fs.indexOf(ff) > -1 });
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
        <Nav className="plus-button-nav" bsStyle="pills" activeKey={1}>
          <ul className="nav navbar-nav">
            <li><Link className="btn btn-default" to="/beers/new"><span>+</span></Link></li>
          </ul>
        </Nav>
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
