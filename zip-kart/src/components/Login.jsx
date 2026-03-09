import { useNavigate } from "react-router-dom";
export default function Login(){
    const navi = useNavigate();
    return (
        <>
            <form>
                <input type="email" placeholder="enter email"></input><br></br>
                <input type="password" placeholder="enter password"></input><br></br>
                <button onClick={()=> navi('/success')}>Login</button>
                <br></br>
                Don't you have any any account yet??👀
                <button onClick={()=> navi('/register')}>Register</button>
            </form>       
        </>
    )
}