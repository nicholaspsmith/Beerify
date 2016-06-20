import {
  FETCH_INGREDIENTS,
  FETCH_RECIPES,
  ADD_INGREDIENT_TO_FILTER,
  REMOVE_INGREDIENT_FROM_FILTER,
  SEARCH_TERM,
  CLEAR_FILTER,
  DELETE_RECIPE,
  CREATE_RECIPE,
  CREATE_INGREDIENTS
} from './types';
import { LOAD, SAVE } from 'redux-storage';

// import axios from 'axios'
// import config from '../../config'
// const URL = `http://api.brewerydb.com/v2/ingredients?key=${config.brewerydb}&format=json`;

export function fetchIngredients() {
  const rawStorage = localStorage.getItem("my-save-key");
  const previousData = JSON.parse(rawStorage);

  const initialState = [
    { id: 101, name: 'Hops' },
    { id: 102, name: 'Barley' },
    { id: 103, name: 'Oats' },
    { id: 104, name: 'Water' },
    { id: 105, name: 'Dry Malt Extract' },
    { id: 106, name: 'Instant Starter Wort' },
    { id: 107, name: 'Malt' },
    { id: 108, name: 'Starter Wort' },
    { id: 109, name: 'Yeast' },
    { id: 110, name: 'Pilsner Malt' },
    { id: 111, name: 'Caramel Pils Malt' },
    { id: 112, name: 'Grain' },
    { id: 113, name: 'Cinnamon' },
    { id: 114, name: 'Vanilla Bean' },
    { id: 115, name: 'Coffee Beans' },
    { id: 116, name: 'Wheat' },
    { id: 117, name: 'Honey' },
  ]
  if (previousData.ingredients.length == 0) {
    return {
      type: FETCH_INGREDIENTS,
      payload: initialState
    }
  }
  return {
    type: FETCH_INGREDIENTS,
    payload: previousData.ingredients
  }
}

export function createIngredients(arr) {
  return {
    type: CREATE_INGREDIENTS,
    payload: arr
  }
}

export function fetchRecipes() {
  const initialState = [
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
  ];

  const rawStorage = localStorage.getItem("my-save-key");
  const previousData = JSON.parse(rawStorage);

  if (previousData.recipes.length === 0) {
    return {
      type: FETCH_RECIPES,
      payload: initialState
    };
  }
  return {
    type: FETCH_RECIPES,
    payload: previousData.recipes
  }
}

export function createRecipe(recipe) {
  return {
    type: CREATE_RECIPE,
    payload: recipe
  }
}

export function deleteRecipe(id) {
  return {
    type: DELETE_RECIPE,
    payload: id
  }
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
