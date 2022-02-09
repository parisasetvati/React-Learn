import React, { useState } from 'react';
const WithCounter = (WrapedComponent,Value) => {
    const UpdateComponent=(props)=>{
        const[count,setCount]=useState(0);
        const clickHandler=()=>{
     setCount(count+Value);
         }
         return <WrapedComponent count={count} clickHandler={clickHandler} {...props}/>  
    }
    return (UpdateComponent );
}
 
export default WithCounter;