import {
  FETCH_INGREDIENTS,
  CREATE_INGREDIENTS
} from '../actions/types';

export default function reducerIngredients(state = [], action) {
  switch(action.type) {
    case FETCH_INGREDIENTS:
      return [ ...state, ...action.payload ]
    case CREATE_INGREDIENTS:
      let index = state.reduce( (a,b) => {
        if (a.id > b.id) {
          return a
        }
        return b
      }).id;
      const newElements = action.payload.map( ing => {
        return { id: ++index, name: ing }
      });
      console.log(newElements)
      return [ ...state, ...newElements];
  }
  return state;
}
