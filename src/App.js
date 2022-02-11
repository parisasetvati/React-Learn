import React, { Component, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Productlist from './Components/Productlist/Productlist';
import ProductsProvider, { useProdocts, UseProductsAction } from './Components/Provider/ProductsProvider';
const  App  = () => {
    
   const products=useProdocts();
   const setProducts=UseProductsAction();
    return (
        <div>
            <ProductsProvider>
        <Navbar/>
            <Productlist/>
            </ProductsProvider>
           </div>
           
      );
}
 
export default App;
