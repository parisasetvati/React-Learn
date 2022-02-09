import React, {useReducer} from "react";
const initialState={firstCounter:0,
secondCounter:0}
const Reducer=(state,action)=>{
    console.log(state,action);
    switch (action.type){
        case 'addOne':
            return {firstCounter:state.firstCounter+1};
            case 'addFive':
                return {firstCounter:state.firstCounter+5};
                case 'decrement':
                    return {firstCounter:state.firstCounter-1};
                    case 'reset':
                        return initialState;
                    default:
                        return state;
    }

}
const CounterReduce = () => {
    
  const[count,dispatch] = useReducer(Reducer,initialState);


    return (

<div>
    <h2>count is {count.firstCounter}</h2>
    <button onClick={()=>dispatch({type:"addOne"})}>addOne</button>
    <button onClick={()=>dispatch({type:"addFive"})}>addFive</button>
    <button onClick={()=>dispatch({type:"decrement"})}>decrement</button>
    <button onClick={()=>dispatch({type:"reset"})}>reset</button>
</div>
      );
}
 
export default CounterReduce;