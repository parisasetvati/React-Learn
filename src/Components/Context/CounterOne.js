import { useContext } from "react";
import {useCounter,useCountAction} from "./CounterProvider";

const CounterOne = () => {
    const count=useCounter();
    // console.log(count);
    const {addFive,addOne,decrement}=useCountAction();
   
    return ( 
        <div>
            <h2>count is {count}</h2>
            <button onClick={addOne}>add one</button>
            <button onClick={addFive}>add Five</button>
            <button onClick={decrement}>add Five</button>
        </div>


     );
}
 
export default CounterOne;