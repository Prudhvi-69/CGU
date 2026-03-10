import { useNavigate } from "react-router-dom"
export function Home() {
    const navi = useNavigate();
    return (
        <div>
            <h1>Welcome to the Tomato App!</h1>
            <p>This is the home page.</p>
            <button onClick={()=> navi('/login')}>Login</button>
            <button onClick={()=> navi('/register')}>Register</button><br></br>
        </div>
    );
}


