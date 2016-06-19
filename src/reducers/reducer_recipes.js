import { FETCH_RECIPES } from '../actions/types';

export default function reducerRecipes(state = [], action) {
  switch(action.type) {
    case FETCH_RECIPES:
      return action.payload
  }
  return state;
}
