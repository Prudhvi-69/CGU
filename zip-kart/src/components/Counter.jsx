import { useState } from "react";
import { useEffect } from "react";
function Counter(){
   const [count, setCount] = useState(0);
   //0 is default value of count, setCount becomes the function to change value of count variable
   //useState is used to create a state variable in functional component, it returns an array of 2 values, first is the state variable and second is the function to change the value of state variable
   //useState is a builtin Hook in React, which is a function component 

   return(
    <>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Click</button>
    </>
   );
}
export default Counter;



