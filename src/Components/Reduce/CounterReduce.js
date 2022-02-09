import React, {useReducer} from "react";
const initialState={firstCounter:0,
secondCounter:0}
const Reducer=(state,action)=>{
    console.log(state,action);
    switch (action.type){
        case 'addOne':
            return {...state,firstCounter:state.firstCounter+action.value};
            case 'addFive':
                return {...state,firstCounter:state.firstCounter+action.value};
                case 'decrement':
                    return {...state,firstCounter:state.firstCounter-action.value};
                    case 'addOne2':
                        return {...state,secondCounter:state.secondCounter+action.value};
                        case 'addFive2':
                            return {...state,secondCounter:state.secondCounter+action.value};
                            case 'decrement2':
                                return {...state,secondCounter:state.secondCounter-action.value};
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
    <div>
    <button onClick={()=>dispatch({type:"addOne",value:1})}>addOne</button>
    <button onClick={()=>dispatch({type:"addFive",value:5})}>addFive</button>
    <button onClick={()=>dispatch({type:"decrement",value:1})}>decrement</button>
    </div>
   
   
    <h2>count is {count.secondCounter}</h2>
    <div>

    <button onClick={()=>dispatch({type:"addOne2",value:1})}>addOne</button>
    <button onClick={()=>dispatch({type:"addFive2",value:5})}>addFive</button>
    <button onClick={()=>dispatch({type:"decrement2",value:1})}>decrement</button>
   
    </div>
    <div>
    <button onClick={()=>dispatch({type:"reset"})}>reset</button>
    </div>
   
</div>
      );
}
 
export default CounterReduce;