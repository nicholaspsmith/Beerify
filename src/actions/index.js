import {
  FETCH_INGREDIENTS,
  FETCH_RECIPES,
  ADD_INGREDIENT_TO_FILTER,
  REMOVE_INGREDIENT_FROM_FILTER,
  SEARCH_TERM,
  CLEAR_FILTER
} from './types';

// import axios from 'axios'
// import config from '../../config'
// const URL = `http://api.brewerydb.com/v2/ingredients?key=${config.brewerydb}&format=json`;

export function fetchIngredients() {
  return {
    type: FETCH_INGREDIENTS,
    payload: [
      { id: 'ing1', name: 'Hops' },
      { id: 'ing2', name: 'Barley' },
      { id: 'ing3', name: 'Oats' },
      { id: 'ing4', name: 'Water' },
      { id: 'ing5', name: 'Dry Malt Extract' },
      { id: 'ing6', name: 'Instant Starter Wort' },
      { id: 'ing7', name: 'Malt' },
      { id: 'ing8', name: 'Starter Wort' },
      { id: 'ing9', name: 'Yeast' },
      { id: 'ing10', name: 'Pilsner Malt' },
      { id: 'ing11', name: 'Caramel Pils Malt' },
      { id: 'ing12', name: 'Grain' },
      { id: 'ing13', name: 'Cinnamon' },
      { id: 'ing14', name: 'Vanilla Bean' },
      { id: 'ing15', name: 'Coffee Beans' },
      { id: 'ing16', name: 'Wheat' },
    ]
  }
}

export function fetchRecipes() {
  return {
    type: FETCH_RECIPES,
    payload: [
      {
        id: 1,
        name: 'Coors Light',
        imageUrl: 'http://res.cloudinary.com/lightspeed-retail/image/upload/c_pad,h_256,q_100,w_256/l61g9uimorlqfncztkxa.jpg',
        ingredients: [ 'Hops', 'Oats', 'Water', "Grain"]
      },
      {
        id: 2,
        name: 'Blue Moon',
        imageUrl: 'http://www.beer-universe.com/images/articles/172/blue-moon-250.jpg',
        ingredients: [ 'Malt', 'Oats', 'Water', 'Cinnamon', "Grain"]
      },
      {
        id: 3,
        name: 'Lone Star',
        imageUrl: 'http://drinks.seriouseats.com/images/2012/04/20120425lonestarbeer.jpg',
        ingredients: [ 'Grain', 'Oats', 'Hops', 'Wort', "Caramel Pils Malt"]
      }
    ]
  };
}

export function addIngredientToFilter(ingredient) {
  return {
    type: ADD_INGREDIENT_TO_FILTER,
    payload: ingredient
  }
}

export function removeIngredientFromFilter(ingredient, index) {
  return {
    type: REMOVE_INGREDIENT_FROM_FILTER,
    payload: { ingredient, index }
  }
}

export function clearFilter() {
  return {
    type: CLEAR_FILTER,
    payload: []
  }
}

export function enterSearchTerm(term) {
  return {
    type: SEARCH_TERM,
    payload: term
  }
}
