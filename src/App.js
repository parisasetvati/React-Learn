import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Productlist from './Components/Productlist/Productlist';
import ClassCounter from './Components/Productlist/ClassCounter';
import FunctionComponent from './Components/Productlist/FunctionComponent';
import ClassTimer from './Components/Productlist/ClassTimer';
import FunctionalTimer from './Components/Productlist/FunctionalTimer';
import Wrapper from './Components/hoc/Wrapper';
import Click from './Components/hocexample/Click';
import Hover from './Components/hocexample/Hover';
import ParentComponent from './Components/PureMemoComponent/ParentComp';
import FunctionRef from './Components/Ref/FunctionRef';
import ClassRef from './Components/Ref/ClassRef';
import UseRefExample from './Components/Ref/UseRefExample';
import CounterReduce from './Components/Reduce/CounterReduce'
import CounterProvider from './Components/Context/CounterProvider';
import CounterOne from './Components/Context/CounterOne';

class App extends React.Component {
    constructor(props){
        super(props)
        console.log('App.js constructor');
    }
    state={
    products:[
        {title:"React.js",price:"99$",quantity:1,id:1},
        {title:"Node.js",price:"89$",quantity:2,id:2},
        {title:"javasrt",price:"79$",quantity:3,id:3},
    ],
    isShow:true
    };
    oncrementHandler=(id)=>{
        const index=this.state.products.findIndex((p)=>p.id===id);
        
        const product={...this.state.products[index]};
        // console.log(product);
        product.quantity++;
      const products=[...this.state.products];
      products[index]=product;
this.setState({products});

    //    const  products=[...this.state.products];
    //   console.log(products)
        // const oncrementItem=products.find((p)=>p.id===id);
        // console.log(oncrementItem.quantity);
        // oncrementItem.quantity++;
        // this.setState({products});

    }
    ondecrementHandler=(id)=>{
        const index=this.state.products.findIndex((item)=>item.id===id);
        const product={...this.state.products[index]};
           if (product.quantity===1) {

               const filterItem=this.state.products.filter((p)=>p.id!==id)
               this.setState({products:filterItem});
           

           }
           else{
            const  products=[...this.state.products];
        product.quantity--;
        products[index]=product;
            this.setState({products});
           }
            
    }
    changeHandler=(event,id)=>{
        const index=this.state.products.findIndex((item)=>item.id===id);
        const product={...this.state.products[index]};
        product.title=event.target.value;
       
        // const selectId=products.find((p)=>p.id===id)
        const  products=[...this.state.products];
      
        products[index]=product;
        this.setState({products});
    }
    removeHandler=(id)=>{
        
        console.log(id);
        const filterItem=this.state.products.filter((p)=>p.id!==id);
        this.setState({products:filterItem});
    }
// componentDidMount() {
//     console.log('App.js componentDidMount');
// }
// componentDidUpdate(prevProps, prevState) {
    
//     console.log('App.js' ,prevState );
// }
// shouldComponentUpdate(nextprops,nextstate){
//     return true;
//   }
    render() { 
        // console.log(this.props);
        return (
        <>
            {/* <button onClick={()=>this.setState({isShow:!this.state.isShow})} >
               {this.state.isShow ? 'hide': 'show'}
            </button>
            {this.state.isShow && <FunctionalTimer/>} */}
            <CounterReduce/>
               
               {/* <CounterProvider>
                   <p>wellcome to context</p>
                   <CounterOne/>
               </CounterProvider> */}
        
            {/* <ClassCounter/> */}
            {/* <FunctionComponent/> */}
            {/* <UserContext.Provider value={"parisa"}>
                <websiteContext.Provider value={"Fronthooks"}>
            <Navbar totalItem={this.state.products.filter((p)=>
            p.quantity>0).length}/>
            <Productlist products={this.state.products} 
            onCrement={this.oncrementHandler} 
            onDecrement={this.ondecrementHandler}
            onchange={this.changeHandler}
            onRemove={this.removeHandler}/>
            </websiteContext.Provider>
            </UserContext.Provider> */}
           
{/* <Click name="parisa"/>
<Hover/> */}
{/* <ParentComponent/> */}
{/* <ClassRef/> */}
{/* <UseRefExample/> */}
</>
        );

    };
}
 
export default App;
 