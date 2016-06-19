import {
  ADD_INGREDIENT_TO_FILTER,
  REMOVE_INGREDIENT_FROM_FILTER
 } from '../actions/types';

export default function reducerFilters(state = [], action) {
  switch(action.type) {
    case ADD_INGREDIENT_TO_FILTER:
      return [ ...state, action.payload ]
    case REMOVE_INGREDIENT_FROM_FILTER:
      return [
        ...state.slice(0, action.payload.index),
        ...state.slice(action.payload.index + 1)
      ]
  }
  return state;
}
