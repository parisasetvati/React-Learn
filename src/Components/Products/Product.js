import styles from './product.module.css';
import { BiTrash } from "react-icons/bi";
import React, { useContext,useEffect } from 'react';



const Product = ({onCrement,onDecrement,onchange,onRemove,product}) => {
console.log('product.js render')
useEffect(()=>{
  // console.log("product.js useEffect");
  return()=>{
    // console.log("cwum");
  }
},[]

);

 return ( 
<div className={styles.product}>
  
    <p>{product.title}</p>
    <p>{product.price}</p>
    
    <input type="text" value={product.title} onChange={onchange}></input>
    <span className={styles.counter}>{product.quantity}</span>
    <div>
    <button className={styles.btn} onClick={onCrement}>+</button>
    <button className={`${styles.btn} ${product.quantity===1 && styles.remove}`}onClick={onDecrement}>{product.quantity>1 ?"-" :<BiTrash/>}</button>
    <button className={styles.btn} onClick={onRemove}>Delete</button>
    </div>
    
   

</div>
  );
}
 
export default Product;