import { useState } from "react";
import { useEffect } from "react";
function Counter(){
    const [count,setCount] = useState(10);
    useEffect(()=>{
        alert('component loaded on to the webpage');
    },[]); // [] is empty, so it will be called only when the component is mounted
    useEffect(()=> {
        alert('Content inside the component is updated just now');
    },[count]);
    // [] is known as dependency array, when you mention a variable inside this [count], this function will be called whenever there is an update inside this variable(not number of times of value inside variable).
    /*
    useEffect(() => {
        alert("This will be shown everytime after mounting and after every update");
    } )  // Don't use any dependency array it will be running always now without it.....
    */
    return(
        <>
        <h1>Number of times button clicked : {count}</h1>
        <button onClick={() => setCount(count+1)}>Clickkkk</button>
        </>
    )
}
export default Counter;
