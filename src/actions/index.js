import {
  FETCH_INGREDIENTS,
  FETCH_RECIPES,
  ADD_INGREDIENT_TO_FILTER,
  REMOVE_INGREDIENT_FROM_FILTER
} from './types';

// import axios from 'axios'
// import config from '../../config'
// const URL = `http://api.brewerydb.com/v2/ingredients?key=${config.brewerydb}&format=json`;

export function fetchIngredients() {
  return {
    type: FETCH_INGREDIENTS,
    payload: [
      { name: 'Hops' },
      { name: 'Barley' },
      { name: 'Oats' },
      { name: 'Water' },
      { name: 'Dry Malt Extract' },
      { name: 'Instant Starter Wort' },
      { name: 'Malt' },
      { name: 'Starter Wort' },
      { name: 'Yeast' },
      { name: 'Pilsner Malt' },
      { name: 'Caramel Pils Malt' },
      { name: 'Grain' },
      { name: 'Cinnamon' },
      { name: 'Vanilla Bean' },
      { name: 'Coffee Beans' },
      { name: 'Wheat' },
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

