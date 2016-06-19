import { combineReducers } from 'redux';
import reducerIngredients from './reducer_ingredients';
import reducerFilters from './reducer_filters';
import reducerRecipes from './reducer_recipes';
import reducerSearchTerm from './reducer_search_term';

const rootReducer = combineReducers({
  recipes: reducerRecipes,
  ingredients: reducerIngredients,
  filters: reducerFilters,
  searchTerm: reducerSearchTerm
});

export default rootReducer;
