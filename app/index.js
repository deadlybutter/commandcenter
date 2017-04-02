import { createStore, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import reducers from './reducers';
import './reset.scss';

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  reducers({
    router: routerReducer
  }),{
    test: 'hey',
  },
  applyMiddleware(middleware)
);

import Router from './components/Router';
Router(store, history);
