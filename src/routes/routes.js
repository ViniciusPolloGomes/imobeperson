import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Products from '../Pages/Products/Products';
import Contact from '../Pages/Contact/Contact';

const Routes = () => (
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/products" component={Products}/>
        <Route path="/contact" component={Contact}/>
    </Switch>
);

export default Routes;