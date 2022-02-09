import Product from "../Products/Product";
import React from "react";
class Productlist extends React.Component {
    componentDidUpdate(prevProps, prevState) {
        console.log('productlist.js componentDidUpdat')
    }
    
    render() { 
        console.log('productlist.js render')
        
        return (
            
        <div>
        {this.props.products.map((product,index)=>{
const{onCrement,onDecrement,onchange,onRemove}=this.props
          return <Product product={product}
          onCrement={()=>onCrement(product.id)} 
          onDecrement={()=>onDecrement(product.id)}
          onchange={(e)=>onchange(e,product.id)}
          onRemove={()=>onRemove(product.id)}
           />
        })
    }
    </div>
        )
}

}
 
export default Productlist;