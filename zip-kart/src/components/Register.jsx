import { useNavigate } from "react-router-dom";
export default function Register(){
    const navi = useNavigate();
    return (
        <>
            <form>
                <input type="text" placeholder="enter name"></input><br></br>
                <input type="email" placeholder="enter email"></input><br></br>
                <input type="password" placeholder="enter password"></input><br></br>
                <button onClick={()=> navi('/login')}>Register</button>
            </form>       
        </>
    )
}