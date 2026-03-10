import { useNavigate } from "react-router-dom";
export default function Register(){
    const navi = useNavigate();
    return (
        <>
            <h1>Hello Mr./Ms./Mrs. User, Your Name is : {name}</h1>
            <form>
                <input type="text" placeholder="enter name"></input><br></br>
                <input type="email" placeholder="enter email"></input><br></br>
                <input type="password" placeholder="enter password"></input><br></br>
                <button onClick={()=> navi('/login')}>Register</button>
            </form>       
                <button onClick={()=> navi(-1)}>Go Back</button>
    <button onClick={()=> navi(1)}>Go Forward</button>
        </>
    )
}