import { useContext,useReducer } from "react";
import {useCounter,useCountAction} from "./CounterProvidercr";

const CounterOne = () => {
    const count=useCounter();
    // console.log(count);
    const dispatch=useCountAction();
   
    return ( 
        <div>
            <h2>count is {count}</h2>
            <button onClick={()=>dispatch({type:'addOne',value:1})}>add one</button>
            <button onClick={()=>dispatch({type:'addFive',value:5})}>add Five</button>
            <button onClick={()=>dispatch({type:'decrement',value:1})}>decrement</button>
            <button onClick={()=>dispatch({type:'reset'})}>reset</button>
        </div>


     );
}
 
export default CounterOne;