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
import axios from 'axios';

const API_URL = "http://localhost:3090";
// import config from '../../config'
// const URL = `http://api.brewerydb.com/v2/ingredients?key=${config.brewerydb}&format=json`;


export function fetchIngredients() {
  // redux-thunk allows returning a function
  return function(dispatch) {
    axios.get(`${API_URL}/ingredients`)
      .then( response => {
        dispatch({
          type: FETCH_INGREDIENTS,
          payload: response.data
        })
      }).catch( err => {
        dispatch(err)
      });
  }
  return {
    type: FETCH_INGREDIENTS,
    payload: previousData.ingredients
  }
}

export function createIngredients(ingredientsArray) {
  console.log('creating ' + ingredientsArray[0] + " " + ingredientsArray[1] + " and others...");
  return function(dispatch) {
    axios.post(`${API_URL}/ingredients`, ingredientsArray);
    dispatch({
      type: CREATE_INGREDIENTS,
      payload: ingredientsArray
    })
  }
}

export function fetchRecipes() {
  return function(dispatch) {
    axios.get(`${API_URL}/recipes`)
      .then( response => {
        dispatch({
          type: FETCH_RECIPES,
          payload: response.data
        })
      })
      .catch( err => {
        dispatch(err)
      });
  }
}

export function createRecipe(recipe) {
  return function(dispatch) {
    axios.post(`${API_URL}/recipes`, recipe)
      .then( response => {
        dispatch( { type: CREATE_RECIPE, payload: recipe })
      })
      .catch( err => {
        dispatch(err)
      })
  }
}

export function deleteRecipe(id) {
  if (typeof id !== 'undefined') {
    return function(dispatch) {
      axios.delete(`${API_URL}/recipes/${id}`)
        .then( response => {
          dispatch( {
            type: DELETE_RECIPE,
            payload: id
          })
        })
        .catch(err => {
          dispatch(err)
        });
    }
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
