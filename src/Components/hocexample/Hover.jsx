import WithCounter from "../hoc/WithCounter";
const Hover = ({count,clickHandler}) => {
    

    return ( 
        <div onMouseOver={clickHandler}>
            hover {count} counter
        </div>
     );

    } 
export default WithCounter(Hover,10) ;