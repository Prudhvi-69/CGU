import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "./UserContext"
export default function Home() {
    const navi = useNavigate()
    const user = useContext(UserContext);
    return (
        <>
        <h1>Welcome to Tuber</h1>
        <h1>This user name is : {user}</h1>
        <p>This is going to be one of the best Uber Clone but among the Worst</p>
        <button onClick={() => navi("/login")}>Login</button>
        <button onClick={() => navi("/register")}> Register </button>  |    
        <button onClick={() => navi(-1)}> PreviousPage </button>
        <button onClick={() => navi(1)}>NextPage</button>
        </>
    )
}