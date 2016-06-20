import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import createLogger from 'redux-logger';
import * as storage from 'redux-storage';
import createEngine from 'redux-storage-engine-localstorage';

import App from './components/app';
import MainView from './components/main_view';
import RecipeDetail from './components/recipe_detail';
import NewRecipe from './components/new_recipe';
import reducers from './reducers';


const reducer = storage.reducer(reducers);

const engine = createEngine('my-save-key');
const middleware = storage.createMiddleware(engine, [/* wont trigger storage*/], [/* will trigger*/]);

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(
  // logger,
  middleware
  )(createStore);
const store = createStoreWithMiddleware(reducer, window.devToolsExtension ? window.devToolsExtension() : f => f);

const history = syncHistoryWithStore(browserHistory, store);

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
