import { combineReducers } from 'redux';
import reducerIngredients from './reducer_ingredients';
import reducerFilters from './reducer_filters';
import reducerRecipes from './reducer_recipes';
import reducerSearchTerm from './reducer_search_term';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  recipes: reducerRecipes,
  ingredients: reducerIngredients,
  filters: reducerFilters,
  searchTerm: reducerSearchTerm,
  routing: routerReducer
});

export default rootReducer;
