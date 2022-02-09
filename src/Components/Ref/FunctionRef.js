import { useRef } from "react";
import { useEffect } from "react/cjs/react.development";
const FunctionRef = () => {
    const inputRef=useRef();
    useEffect(()=>{
        inputRef.current.focus();
    },[]);
    return (  
        <input type="text" ref={inputRef}>

        </input>
    );
}
 
export default FunctionRef;