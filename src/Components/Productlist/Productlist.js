import Product from "../Products/Product";
import React from "react";
import { useProdocts, UseProductsAction } from "../Provider/ProductsProvider";
const Productlist = (props) => {
    const products=useProdocts();
    const dispatch=UseProductsAction();
    return ( 
        <div>
        {products.map((product,index)=>{

          return <Product product={product}
          onCrement={()=>dispatch({type:'crement',id:product.id})} 
          onDecrement={()=>dispatch({type:'decrement',id:product.id})}
          onchange={(e)=>dispatch({type:'edit',id:product.id,event:e})}
          onRemove={()=>dispatch({type:'remove',id:product.id})}
           />
        })
    }
    </div>
     );
}
 
export default Productlist;


