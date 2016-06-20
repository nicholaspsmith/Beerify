import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import {
  Panel,
  ListGroup,
  Checkbox
} from 'react-bootstrap';
import _ from 'lodash';

class IngredientsList extends Component {
  constructor(props) {
    super(props);

    this.props.clearFilter();
  }

  componentWillMount() {
    if (this.props.ingredients.length == 0) {
      this.props.fetchIngredients();
    }
  }

  boxChecked(e) {
    // Is the ingredient in our filters array?
    const index = this.props.filters.indexOf(e.target.value);
    if (index < 0) {
      // Add checked ingredient to filters
      this.props.addIngredientToFilter(e.target.value);
    } else {
      // Remove checked ingredient from filters
      this.props.removeIngredientFromFilter(e.target.value, index);
    }
  }

  orderAndRenderIngredients() {
    // sort ingredients alphabetically
    const orderedIngredients = this.props.ingredients.sort( (a,b) => {
      const lowerA = a.name.toLowerCase();
      const lowerB = b.name.toLowerCase();
      if (lowerA < lowerB) {
        return -1;
      } if (lowerA > lowerB) {
        return 1;
      }
      return 0;
    });

    // render each ingredient
    return orderedIngredients.map(this.renderIngredient.bind(this));
  }

  renderIngredient(ingredient) {
    return (
      <Checkbox onClick={ this.boxChecked.bind(this) } value={ingredient.name} key={ingredient.id}>{ingredient.name}</Checkbox>
    );
  }

  render() {
    if (this.props.ingredients.length === 0 || typeof this.props.filters === 'undefined') {
      return <div>Loading...</div>;
    }
    return (
      <Panel header="Filter by Ingredients">
        <div>
          {this.orderAndRenderIngredients()}
        </div>
      </Panel>
    )
  }
}

function mapStateToProps(state) {
  return {
    ingredients: state.ingredients,
    filters: state.filters
  }
}

export default connect(mapStateToProps, actions)(IngredientsList);
