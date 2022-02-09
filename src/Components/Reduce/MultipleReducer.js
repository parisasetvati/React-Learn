
import React, {useReducer} from "react";
const initialState=0;
const Reducer=(state,action)=>{
    console.log(state,action);
    switch (action){
        case 'addOne':
            return state+1;
            case 'addFive':
                return state+5
                case 'decrement':
                    return state-1;
                    
                    case 'reset':
                        return initialState;
                    default:
                        return state;
    }

}
const CounterReduce = () => {
    
  const[count,dispatch] = useReducer(Reducer,initialState);
  const[count2,dispatch2] = useReducer(Reducer,initialState);



    return (

<div>
<h2>count is {count}</h2>
    <div>
    <button onClick={()=>dispatch("addOne")}>addOne</button>
    <button onClick={()=>dispatch("addFive")}>addFive</button>
    <button onClick={()=>dispatch("decrement")}>decrement</button>
    <button onClick={()=>dispatch("reset")}>reset</button>
    </div>
   
   
    <h2>count is {count2}</h2>
    <div>

    <button onClick={()=>dispatch2("addOne")}>addOne</button>
    <button onClick={()=>dispatch2("addFive")}>addFive</button>
    <button onClick={()=>dispatch2("decrement")}>decrement</button>
    <button onClick={()=>dispatch2("reset")}>reset</button>
   
    </div>
    <div>
  
    </div>
   
</div>
      );
}
 
export default CounterReduce;