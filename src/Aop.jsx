import React, {useState} from 'react';










const Aop = () =>{
    const state = useState();
    const[count, setCount]=useState(1);
    const IncNum=()=>{
        setCount(count+1);
        
    };
    const DcrNum=()=>{
        setCount(count-1);
        
    };
    
    
    return(
   <div>
  <h1>{count}</h1>
  
   <button onClick={IncNum}>Increment</button>
   <button onClick={DcrNum}>Decrement</button>
   
  
   </div>
   
    );

};
export default Aop;