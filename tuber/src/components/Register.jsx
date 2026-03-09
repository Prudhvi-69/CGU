import { useNavigate } from "react-router-dom";
export function Register() {
    const nav = useNavigate()
    return (
        <>
        <h1>Register Page</h1>   
        <form>
            <input type="text" placeholder="Username" /> <br />
            <input type="email" placeholder="Email" /> <br />
            <input type="password" placeholder="Password" /> <br />
            <button onClick={() => nav("/login")}>Register</button>
        </form>     
        </>
    )
}