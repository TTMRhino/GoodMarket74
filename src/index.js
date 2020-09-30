import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, HashRouter} from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import GoodstoreService from './services/goodstore-services';
import { GoodServiceProvider } from './components/goodstore-sevices-contex';


import store from './store';

const goodstoreService = new GoodstoreService();


ReactDOM.render(
  <Provider store = {store}>
    <ErrorBoundry>
      <GoodServiceProvider value = {goodstoreService}> 
        <HashRouter>
          
            <App />
          
        </HashRouter>
      </GoodServiceProvider>
    </ErrorBoundry>
  </Provider>
  ,
  document.getElementById('root')
);



