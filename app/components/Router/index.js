import React from 'react';
import { render } from 'react-dom';
import { Route } from 'react-router';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import Page from '../Page';
import Home from '../Home';

export default (store, history) => {
  render((
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Page>
          <Route exact path="/" component={Home}/>
        </Page>
      </ConnectedRouter>
    </Provider>
  ), document.getElementById('jsx-root'));
}
