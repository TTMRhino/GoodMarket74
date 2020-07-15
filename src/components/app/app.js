import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, CartPage, CatalogPage } from '../pages';

import './app.css';

const App = () =>{
    
    return (
        <Switch>
            <Route path="/" component={ HomePage } exact/>

            <Route path="/cart" component={ CartPage } />

            <Route path="/catalog" component={ CatalogPage } />
        </Switch>
    );
};


export default App;
