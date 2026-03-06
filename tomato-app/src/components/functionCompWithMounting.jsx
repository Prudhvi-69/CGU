import { useEffect} from "react";
import { useState } from "react";
function Checks()
{
    const [count, setCount] = useState(0);
    useEffect(() => {
        alert("Component Mounted💥💥💥💥💥💥💥💥💥💥💥💥");  
    }, []); //[] known as dependency array, if we want to run the useEffect only once when the component mounts, we can pass an empty array as the second argument. 
    useEffect(() => {
        if(count>5)
            alert("Component Updated🎀🎀🎀🎀🎀🎀🎀🎀🎀🎀🎀");
        else
            alert("Component Updated but count is less than or equal to 5🎀🎀🎀🎀🎀🎀🎀🎀🎀🎀🎀"); 
    },[count]); // if we want to run the useEffect only when a specific state variable (like count) changes, we can pass that variable in the dependency array.
    return(
        <>
        <h1>This is the content inside H1 but inside the Function not class</h1>
        <button onClick={() => setCount(count + 1)}>Count: {count}</button>
        </>
)}
export default Checks;