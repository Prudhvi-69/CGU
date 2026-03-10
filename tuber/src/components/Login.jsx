import { useNavigate } from "react-router-dom"
export function Login(){
    const nav = useNavigate()
    return(
        <div>
            <form>
                <input type="textarea" placeholder="Username"/><br/>
                <input type="password" placeholder="Password"/><br/>
                <button type="submit" onClick={() => nav("/success")}>Login</button><br></br>
                Don't you have any account yet?👀🐈
                <button onClick={() => nav("/register")}>Register</button>
            </form>   
            <button onClick={() => nav(-1)}> Back </button>
        </div>
    )
}