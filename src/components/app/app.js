import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, CartPage, CatalogPage, ContactPage, HeaderPage} from '../pages';

import './app.css';

const App = () =>{
    
    return (
     
         <div > 
          <HeaderPage/> 
        <Switch>
            <Route path="/" component={ HomePage }   exact/>

            <Route path="/cart" component={ CartPage } />
           
            <Route path="/catalog/:id?" component={ CatalogPage } />

            <Route path="/contact" component={ ContactPage } />
        </Switch>
        </div>
        
        
        
    );
};


export default App;
