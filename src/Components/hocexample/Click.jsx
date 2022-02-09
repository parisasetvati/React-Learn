import WithCounter from "../hoc/WithCounter";
const Click = ({count,clickHandler,name}) => {
    console.log(name)
    
    return ( 
        <div onClick={clickHandler}>
            click {count} counter
        </div>
     );
}
 
export default WithCounter(Click,5);