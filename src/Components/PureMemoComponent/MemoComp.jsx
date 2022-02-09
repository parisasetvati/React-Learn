import React from 'react';

const MemoComp = (props) => {
    console.log("memocomp")
    return (  
        <div>memo comp{props.name}</div>
    );
}
 

export default React.memo(MemoComp) ;
