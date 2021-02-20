import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Products from '../Pages/Products/Products';
import Contact from '../Pages/Contact/Contact';
import Sobre from '../Pages/Sobre/Sobre';
import Services from '../Pages/Servicess/Services';

const Routes = () => (
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/sobre" component={Sobre}/>
        <Route path="/services" component={Services}/>
        <Route path="/products" component={Products}/>
        <Route path="/contact" component={Contact}/>
    </Switch>
);

export default Routes;