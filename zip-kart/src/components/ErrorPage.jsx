import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "./ContextFile.jsx"
export function ErrorPage(){
    const navi = useNavigate();//It is going to create easy navigation functions on buttons in the webpage where you can mention to which url path, you want to redirect back to.
    const user = useContext(UserContext);
    return(
        <div>
            <h1>The page you are looking for is either removed or deleted</h1>
            <button onClick={()=> navi('/')}>Go to HomePage</button>
            <button onClick={()=> navi(-1)}>Go Back</button>
            <button onClick={()=> navi(1)}>Go Forward</button>
            <h1> Hello user, your name is : {user} </h1>
        </div>    
    )
}
