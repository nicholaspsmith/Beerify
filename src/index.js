import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import createLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import MainView from './components/main_view';
import RecipeDetail from './components/recipe_detail';
import NewRecipe from './components/new_recipe';
import reducers from './reducers';

// const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers, window.devToolsExtension ? window.devToolsExtension() : f => f);

ReactDOM.render(
  <Provider store={store}>
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
