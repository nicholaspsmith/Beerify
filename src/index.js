import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './components/app';
import MainView from './components/main_view';
import RecipeDetail from './components/recipe_detail';
import NewRecipe from './components/new_recipe';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={MainView} />
        <Route path="beers">
          <Route path="new" component={NewRecipe} />
          <Route path=":id" component={RecipeDetail}/>
        </Route>
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
