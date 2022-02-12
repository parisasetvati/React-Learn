import React, { useContext ,useReducer} from "react";
const initialState=([
    {title:"React.js",price:"99$",quantity:1,id:1},
    {title:"Node.js",price:"89$",quantity:2,id:2},
    {title:"javasrt",price:"79$",quantity:3,id:3},
]);
const reducer=(state,action)=>{
    console.log(state,action);
    switch (action.type){
     case 'crement':{
        const index=state.findIndex((p)=>p.id===action.id);
        const product={...state[index]};
        product.quantity++;
      const updateProducts=[...state];
     updateProducts[index]=product;
     return updateProducts;
    
     }
     
    
    case 'decrement':
    {
        const index=state.findIndex((p)=>p.id===action.id);
        
        const product={...state[index]};
        if (product.quantity===1){
            const filterItem=state.filter((p)=>p.id!==action.id);
            return filterItem;
        }
        else{
        product.quantity--;
      const updateProducts=[...state];
     updateProducts[index]=product;
    return updateProducts;
        }
    }
       
    case 'edit':{
        const index=state.findIndex((item)=>item.id===action.id);
        const product={...state[index]};
        product.title=action.event.target.value;
       
        const  updateProducts=[...state];
        updateProducts[index]=product;
        return updateProducts;
    
    }
       
    case 'remove':{
        const filterItem=state.filter((p)=>p.id!==action.id);
        return filterItem;
    }
        
    
}
}
const ProductsContext=React.createContext();
const ProductsContextDispacher=React.createContext();
const ProductsProvider = ({children}) => {
    const[products,dispatch]=useReducer(reducer,initialState)
    return (
        <ProductsContext.Provider value={products}>
            <ProductsContextDispacher.Provider value={dispatch}>
                {children}
            </ProductsContextDispacher.Provider>
        </ProductsContext.Provider>
      );
}
 
export default ProductsProvider;
export const  useProdocts=()=>useContext(ProductsContext);
export const UseProductsAction=()=>{
return  useContext(ProductsContextDispacher);
}

