import React, { useState, useEffect ,useRef} from 'react';
const UseRefExample = () => {
    const[TextValue,SetTextValue]=useState('');
    const[count,setCount]=useState(0);
    const perviouseValue=useRef();
    const perviouseCount=useRef();
 const changeHandler=(e)=>{
    SetTextValue(e.target.value);

}
const countHandler=()=>{
    setCount(Math.ceil(Math.random()*100));
}
// const resetHandler=()=>{
// SetTextValue('');
// inputValue.current.focus();
// }
useEffect(()=>{
    console.log( perviouseValue.current);
    perviouseCount.current=count;
},[count])
    return ( 
        <div>
            <input type="text" onChange={changeHandler}  value={TextValue}>

            </input>
            <p>my name is {TextValue} and it used to be {perviouseValue.current}</p>
            <button onClick={countHandler}>generate random </button>
            <div>count is {count}</div>
            <div> perviouse count is{perviouseCount.current}</div>
            {/* <button onClick={resetHandler}>Reset</button> */}
        </div>
     );
}
 
export default UseRefExample;