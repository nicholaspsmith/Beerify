import {
  FETCH_INGREDIENTS,
  FETCH_RECIPES,
  ADD_INGREDIENT_TO_FILTER,
  REMOVE_INGREDIENT_FROM_FILTER,
  SEARCH_TERM
} from './types';

// import axios from 'axios'
// import config from '../../config'
// const URL = `http://api.brewerydb.com/v2/ingredients?key=${config.brewerydb}&format=json`;

export function fetchIngredients() {
  return {
    type: FETCH_INGREDIENTS,
    payload: [
      { id: 101, name: 'Hops' },
      { id: 102, name: 'Barley' },
      { id: 103, name: 'Oats' },
      { id: 104, name: 'Water' },
      { id: 105, name: 'Dry Malt Extract' },
      { id: 106, name: 'Instant Starter Wort' },
      { id: 107, name: 'Malt' },
      { id: 108, name: 'Starter Wort' },
      { id: 109, name: 'Yeast' },
      { id: 1010, name: 'Pilsner Malt' },
      { id: 1011, name: 'Caramel Pils Malt' },
      { id: 1012, name: 'Grain' },
      { id: 1013, name: 'Cinnamon' },
      { id: 1014, name: 'Vanilla Bean' },
      { id: 1015, name: 'Coffee Beans' },
      { id: 1016, name: 'Wheat' },
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
        imageUrl: 'http://beerhold.it/128/128',
        ingredients: [ 'Hops', 'Oats', 'Water', "Grain"]
      },
      {
        id: 2,
        name: 'Cinnamon Twist',
        imageUrl: 'http://beerhold.it/128/128',
        ingredients: [ 'Malt', 'Oats', 'Water', 'Cinnamon', "Grain"]
      },
      {
        id: 3,
        name: 'Lone Star',
        imageUrl: 'http://beerhold.it/128/128',
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

export function enterSearchTerm(term) {
  return {
    type: SEARCH_TERM,
    payload: term
  }
}
