import {
  FETCH_RECIPES,
  DELETE_RECIPE,
  CREATE_RECIPE
 } from '../actions/types';

export default function reducerRecipes(state = [], action) {
  switch(action.type) {
    case FETCH_RECIPES:
      return action.payload
    case DELETE_RECIPE:
      return state.filter( r => r.id != action.payload )
    case CREATE_RECIPE:
      return [ ...state, action.payload ]
  }
  return state;
}
