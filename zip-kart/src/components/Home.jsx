import { useNavigate } from "react-router-dom"
export function HomePage() {
  const navv= useNavigate();
  return (
    <>
    <h1>ZipKart Home Page</h1>
    <p>This is our Home Page, welcoming you people, have some bad luck everyday little more</p>
    <button onClick={()=> navv('/login')}>Login</button>
    <button onClick={()=> navv('/register')}>Register</button>    
    <button onClick={()=> navv(-1)}>Go Back</button>
    <button onClick={()=> navv(1)}>Go Forward</button>
    </>
  )
}
/*
function Home() {
    return (
        <h1>ZipKart Home Page</h1>
    )
}   
export default Home
*/ 