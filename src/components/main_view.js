import React, { Component } from 'react';
import IngredientsList from './ingredients_list';
import RecipesList from './recipes_list';
import SearchBar from './search_bar';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router';

export default class MainView extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Col sm={4}>
          <IngredientsList />
        </Col>
        <Col sm={8}>
          <RecipesList />
        </Col>
      </div>
    );
  }
}


