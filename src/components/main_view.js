import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import IngredientsList from './ingredients_list';
import RecipesList from './recipes_list';

export default class MainView extends Component {
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


