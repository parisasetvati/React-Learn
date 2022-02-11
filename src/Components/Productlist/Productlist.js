import Product from "../Products/Product";
import React from "react";
import { useProdocts, UseProductsAction } from "../Provider/ProductsProvider";
const Productlist = (props) => {
    const products=useProdocts();
    const {removeHandler,changeHandler,oncrementHandler,ondecrementHandler}=UseProductsAction();
    return ( 
        <div>
        {products.map((product,index)=>{

          return <Product product={product}
          onCrement={()=>oncrementHandler(product.id)} 
          onDecrement={()=>ondecrementHandler(product.id)}
          onchange={(e)=>changeHandler(e,product.id)}
          onRemove={()=>removeHandler(product.id)}
           />
        })
    }
    </div>
     );
}
 
export default Productlist;


