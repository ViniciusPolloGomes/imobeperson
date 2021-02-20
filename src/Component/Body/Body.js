import React from 'react';
import Sobre from '../../Pages/Sobre/Sobre';
import Services from '../../Pages/Servicess/Services';
import Product from '../../Pages/Products/Products';
import Contact from '../../Pages/Contact/Contact';


const Body= () => {

    return(
        <>
            <Sobre/>
            <Services/>
            <Product/>
            <Contact/>
        </>
    );
}
export default Body;