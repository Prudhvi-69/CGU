import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./UserContext";
export default function Register() {
    const nav = useNavigate()
    const user = useContext(UserContext);
    return (
        <>
        <h1>Register Page</h1>  
        <h1>User name : {user}</h1> 
        <form>
            <input type="text" placeholder="Username" /> <br />
            <input type="email" placeholder="Email" /> <br />
            <input type="password" placeholder="Password" /> <br />
            <button onClick={() => nav("/login")}>Register</button>
        </form>     
        </>
    )
}