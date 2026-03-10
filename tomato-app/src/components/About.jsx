import { useContext } from "react"
import { UserContext } from "./UserContextFile"
export function About() {
    const user = useContext(UserContext); //3. Consuming the context value using useContext hook
    return (
        <div>  
            <h1>About Us</h1>
            <h2>Current user : {user}</h2>
            <p>We are a company dedicated to providing the best tomato products in the world. Our mission is to deliver fresh, high-quality tomatoes to our customers while maintaining sustainable farming practices.</p>
            <p>Our team of experts works tirelessly to ensure that every tomato we produce meets our strict quality standards. We believe in transparency and are committed to sharing our farming practices with our customers.</p>
            <p>Thank you for choosing us for your tomato needs. We look forward to serving you!</p>
        </div>
    )
}
