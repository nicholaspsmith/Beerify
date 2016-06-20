import {
  FETCH_INGREDIENTS,
  FETCH_RECIPES,
  ADD_INGREDIENT_TO_FILTER,
  REMOVE_INGREDIENT_FROM_FILTER,
  SEARCH_TERM,
  CLEAR_FILTER,
  DELETE_RECIPE,
  CREATE_RECIPE
} from './types';
import { LOAD, SAVE } from 'redux-storage';

// import axios from 'axios'
// import config from '../../config'
// const URL = `http://api.brewerydb.com/v2/ingredients?key=${config.brewerydb}&format=json`;

export function fetchIngredients() {
  const rawStorage = localStorage.getItem("my-save-key");
  const previousData = JSON.parse(rawStorage);
  console.log(previousData.ingredients.length)

  const initialState = [
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
    { id: 'ing17', name: 'Honey' },
  ];
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
