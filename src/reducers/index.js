import { combineReducers } from 'redux';
import reducerIngredients from './reducer_ingredients';
import reducerFilters from './reducer_filters';
import reducerRecipes from './reducer_recipes';

const rootReducer = combineReducers({
  recipes: reducerRecipes,
  ingredients: reducerIngredients,
  filters: reducerFilters
});

export default rootReducer;
