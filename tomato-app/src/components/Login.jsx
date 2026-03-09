import { useNavigate } from "react-router-dom"
export function LoginPage(){
    const navi = useNavigate();
    return(
<div>
    <form>
        <input type="textarea"placeholder="Enter username"></input><br></br>
        <input type="password" placeholder="Enter password"></input><br></br>
        <button onClick={() => navi('/successLogin')}>Login</button>    
    </form>        
    Don't have an account? <button onClick={() => navi('/register')}>Register</button>
    
</div> 
    )
}   //Create Login and Register pages for your application save them with .jsx
    //Import them inside App.jsx and add them as the XML tags 
// export default LoginPage