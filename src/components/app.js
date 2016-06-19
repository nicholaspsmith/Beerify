import React, { Component } from 'react';
import IngredientsList from './ingredients_list';
import RecipesList from './recipes_list';
import { Col } from 'react-bootstrap';

export default class App extends Component {
  render() {
    return (
      <div>
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
