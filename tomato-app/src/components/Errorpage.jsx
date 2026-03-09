import { useNavigate } from "react-router-dom";
export function ErrorPage() {
    const navi = useNavigate();
    return (
        <div>
            <h1>404 Not Found</h1>
            <p>The page you are looking for does not exist.</p> 
            <button onClick={() => navi('/')}>Click here to redirect to Home Page</button>
        </div>
    );  
}