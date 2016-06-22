import {
  FETCH_INGREDIENTS,
  CREATE_INGREDIENTS
} from '../actions/types';

export default function reducerIngredients(state = [], action) {
  switch(action.type) {
    case FETCH_INGREDIENTS:
      return [ ...state, ...action.payload ]
    case CREATE_INGREDIENTS:
      return [ ...state, ...action.payload];
  }
  return state;
}
