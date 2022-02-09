
import React,{useContext, useReducer} from "react";

const CounterContext=React.createContext();
const CounterContextDispatcher=React.createContext();
const initialState=0;
const reducer=(state,action)=>{

 switch (action.type){
        case 'addOne':
            return state+action.value;
            case 'addFive':
                return state+action.value;
                case 'decrement':
                    return state-action.value;
                    
                    case 'reset':
                        return initialState;
                    default:
                        return state;
    }

}
const CounterProvider = ({children}) => {
   const[count,dispatch]=useReducer(reducer,initialState);
   return(
 <CounterContext.Provider  value={count}>
   <CounterContextDispatcher.Provider value={dispatch}>
{children}
   </CounterContextDispatcher.Provider>

 </CounterContext.Provider>
   )
}

export default CounterProvider;
export const useCounter=()=>useContext(CounterContext);
export const useCountAction=()=>{
 return useContext(CounterContextDispatcher);

}
 