import { useNavigate } from "react-router-dom"
export function Home() {
    const navi = useNavigate()
    return (
        <>
        <h1>Welcome to Tuber</h1>
        <p>This is going to be one of the best Uber Clone but among the Worst</p>
        <button onClick={() => navi("/login")}>Login</button>
        <button onClick={() => navi("/register")}> Register </button>
        </>
    )
}