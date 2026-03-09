import { useNavigate } from "react-router-dom"
export function ErrorPage() {
    const navv = useNavigate() //It is a hook which gives us the function to navigate to any page we want with the help of a simple button click functionality
    return (
        <div>
            <h1>404 Error</h1>
            <p>Page Not Found</p>
            <button onClick={() => navv("/")}>Go to Home</button>
        </div>
    )
}
