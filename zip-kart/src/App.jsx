import './App.css'
// import { HomePage } from './components/Home'
// import { Reviews } from './components/Reviews'
// import { Contactus } from './components/Contactus'
import Counts from './components/FunCompCount'
import Counter from './components/Counter'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { HomePage } from './components/Home'
import { Reviews } from './components/Reviews'
import  Contactus  from './components/Contactus'
import { NavLink } from 'react-router-dom'
import { ErrorPage } from './components/ErrorPage'
import Register from './components/Register'
import Login from './components/Login'
import StudentForm from './pages/StudentForm'
import { useState,useEffect } from 'react'
function App() {
  const [users,setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(result => result.json())
    .then(data => setUsers(data));
  },[]);
  return (
    <>
    <h1>Data fetching from JSON Placeholder</h1>
    {users.map(user => (
      <div>
  <p key={user.id}>Name : {user.name}</p>
  <p key={user.id}>Email : {user.email}</p>
  <p key={user.id}>Phone : {user.phone}</p>
  <p key={user.id}>Website : {user.website}</p>      
      </div>
  ))}
  </>
  // <>
  // <BrowserRouter>
  //   <nav>
  //     <NavLink to="/" style={({isActive}) => ({
  //       color: isActive ? "blue" : "hotpink"
  //     })}>Home </NavLink> | 
  //     <NavLink to="/reviews" style={({isActive}) => ({
  //       color: isActive ? "skyblue" : "hotpink"
  //     })}>Reviews</NavLink> |
  //     <NavLink to="/services" style={({isActive}) => ({
  //       color: isActive ? "orange" : "hotpink"
  //     })}>Services </NavLink> | 
  //     <NavLink to="/about" style={({isActive}) => ({
  //       color: isActive ? "green" : "hotpink"
  //     })}>About</NavLink> |
  //     <NavLink to="/contactus" style={({isActive}) => ({
  //       color: isActive ? "white" : "hotpink"
  //     })}>Contact Us </NavLink> | 
  //     <NavLink to="/login" style={({isActive}) => ({
  //       color: isActive ? "red" : "hotpink"
  //     })}>Login</NavLink>  | 
  //     <NavLink to="/register"style={({isActive}) => ({
  //       color: isActive ? "teal" : "hotpink"
  //     })}>Register</NavLink> 
  //     <NavLink to="/studentform" style={({isActive}) => ({
  //       color: isActive ? "purple" : "hotpink"
  //     })}>Student Form</NavLink>
  //   </nav>
  //   {/* <nav>
  //     <Link to="/">Home</Link>  |  
  //     <Link to="/reviews">Reviews</Link>  |  
  //     <Link to="/services">Services</Link>  |  
  //     <Link to="/about">About</Link>  |  
  //     <Link to="/contactus">Contact Us</Link>  |  
  //     <Link to="/login">Login</Link>
  //   </nav> */}
  //   <Routes>
  //     <Route path="/" element={<HomePage/> } />
  //     <Route path="/reviews" element={<Reviews/>} />
  //     <Route path="/services" element={<h1>This is Services Page</h1>} />
  //     <Route path="/about" element={<h1>About Page</h1>} />
  //     <Route path="/contactus" element={<Contactus/>} />
  //     <Route path="/login" element={<Login/>} />
  //     <Route path="*" element={<ErrorPage/>}/>
  //     <Route path="/register" element={<Register name="CGU"/>}/>
  //     <Route path="/success" element={<h1>Login Successful</h1>}/>
  //     <Route path="/studentform" element={<StudentForm/>}/>
  //   </Routes>
  //       {/* <Counts name="Hundia"/> */}
  // </BrowserRouter>


  //   {/* <Counts name="CGU" age="69"/>
  //   <Counter/> */}
    
  //   <h1> Users Data </h1>
  //   {users.map(user => (
  //       <p key={user.id}>{user.name}</p>
  // ))}
  //   </>
  )
}
export default App
