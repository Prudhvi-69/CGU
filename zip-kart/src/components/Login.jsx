import { useNavigate } from "react-router-dom";
import { useContext } from "react"
import { UserContext } from "./ContextFile.jsx"
export default function Login(){
    const navi = useNavigate();
    const user = useContext(UserContext);
    return (
        <>
        <h1> Current user about to login : {user} </h1>
            <form>
                <input type="email" placeholder="enter email"></input><br></br>
                <input type="password" placeholder="enter password"></input><br></br>
                <button onClick={()=> navi('/success')}>Login</button>
                <br></br>
                Don't you have any any account yet??👀
                <button onClick={()=> navi('/register')}>Register</button>
               
            </form>
                 <button onClick={()=> navi(-1)}>Go Back</button>
    <button onClick={()=> navi(1)}>Go Forward</button>       
        </>
    )
}