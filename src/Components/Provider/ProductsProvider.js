import React, { useContext ,useState} from "react";

const ProductsContext=React.createContext();
const ProductsContextDispacher=React.createContext();
const ProductsProvider = ({children}) => {
    const[products,setProducts]=useState([
        {title:"React.js",price:"99$",quantity:1,id:1},
        {title:"Node.js",price:"89$",quantity:2,id:2},
        {title:"javasrt",price:"79$",quantity:3,id:3},
    ]);
    return (
        <ProductsContext.Provider value={products}>
            <ProductsContextDispacher.Provider value={setProducts}>
                {children}
            </ProductsContextDispacher.Provider>
        </ProductsContext.Provider>
      );
}
 
export default ProductsProvider;
export const  useProdocts=()=>useContext(ProductsContext);
export const UseProductsAction=()=>{
const setProducts=useContext(ProductsContextDispacher);
const products=useProdocts();
const oncrementHandler=(id)=>{
    const index=products.findIndex((p)=>p.id===id);
    
    const product={...products[index]};
    product.quantity++;
  const updateProducts=[...products];
 updateProducts[index]=product;
setProducts(updateProducts);



}
const  ondecrementHandler=(id)=>{
    const index=products.findIndex((item)=>item.id===id);
    const product={...products[index]};
       if (product.quantity===1) {
           const filterItem=products.filter((p)=>p.id!==id)
           setProducts(filterItem);
       
       }
       else{
       
        const updateProducts=[...products];
    product.quantity--;
  
 updateProducts[index]=product;
setProducts(updateProducts)
       }
        
}
 const changeHandler=(event,id)=>{
    const index=products.findIndex((item)=>item.id===id);
    const product={...products[index]};
    product.title=event.target.value;
   
    const  updateProducts=[...products];
    updateProducts[index]=product;
    setProducts(updateProducts);
}
const removeHandler=(id)=>{
    console.log(id);
    const filterItem=products.filter((p)=>p.id!==id);
    setProducts(filterItem);
}
return {removeHandler,changeHandler,oncrementHandler,ondecrementHandler}
}

