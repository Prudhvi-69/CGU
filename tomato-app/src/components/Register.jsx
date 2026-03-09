import {useNavigate} from 'react-router-dom'
export function Register() {
    const navi = useNavigate();
    return (
        <div>
            <h1>Register</h1>
            <form>
                <input type="text" placeholder="Enter username"></input><br></br>
                <input type="email" placeholder="Enter email"></input><br></br>
                <input type="password" placeholder="Enter password"></input><br></br>
                <button onClick={() => navi('/login')}>Register</button>
            </form>
        </div>
    );
}