import { useNavigate } from "react-router-dom"
export function ErrorPage(){
    const navi = useNavigate();//It is going to create easy navigation functions on buttons in the webpage where you can mention to which url path, you want to redirect back to.
    return(
        <div>
            <h1>The page you are looking for is either removed or deleted</h1>
            <button onClick={()=> navi('/')}>Go to HomePage</button>
        </div>    
    )
}
