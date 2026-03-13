import './App.css'
// import { Home } from './components/Home'
// import { Reviews } from './components/Reviews'
// import { Contact } from './components/Contact'
// import { About } from './components/About'
// import Check from './components/FileMain';
import Show from './components/Showing';
// import Counter from './components/ClassComp';
// import Counter from './components/FuncCompCounter';

// import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Reviews } from './components/Reviews'
import { Login } from './components/Login'
import { NavLink } from 'react-router-dom'
import { ErrorPage } from './components/ErrorPage'
import  Home  from './components/Home'
import  Register  from './components/Register'
import StudentForm from './pages/StudentForm';
function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/" style={({isActive}) => ({
          color : isActive ? "orange" : "blue"
        })}> Home </NavLink> | 
        <NavLink to="/reviews"style={({isActive}) => ({
          color : isActive ? "skyblue" : "blue"
        })}> Reviews </NavLink> | 
        <NavLink to="contact" style={({isActive}) => ({
          color : isActive ? "hotpink" : "blue"
        })}> Contact </NavLink> | 
        <NavLink to="/about" style={({isActive}) => ({
          color : isActive ? "purple" : "blue"
        })}> About </NavLink> |
        <NavLink to="/services" style={({isActive}) => ({
          color : isActive ? "yellow" : "blue"
        })}> Services </NavLink> | 
        <NavLink to="/login" style={({isActive}) => ({
          color : isActive ? "green" : "blue"
        })}> Login </NavLink> | 
        <NavLink to="/register" style={({isActive}) => ({
          color : isActive ? "red" : "blue"
        })}> Register </NavLink>
        <NavLink to="/studentform" style={({isActive}) => ({
          color : isActive ? "cyan" : "blue"
        })}> Student Form </NavLink>
                
        {/* <Link to="/">Home</Link>   |     
         <Link to="/reviews"> Reviews</Link>    |     
         <Link to="/contact"> Contact</Link>   |     
         <Link to="/about"> About</Link>   |     
         <Link to="/services"> Services</Link>   |     
         <Link to="/login"> Login</Link>   |     
         <Link to="/register"> Register</Link>        */}
      </nav> 
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/reviews" element={<Reviews/>} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/services" element={<h1>Services Page</h1>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/success" element={<h1>Login Successfull</h1>} />
        <Route path="/studentform" element={<StudentForm/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
      <Show name="Tony Stark"/>
    </BrowserRouter>
      // const [count, setCount] = useState(1006.01);
  // const [name, setupName] = useState('MyName');
    // <div>
    //   <h1>Tuber is the future</h1>
    //   <p>We are building the future of taxi sharing with tuber</p>
    //   {/* <button onClick={ () => setCount(count+1) }>Click to Increase</button>
    //   <h1>{count}</h1>
    //   <button onClick={ () => setupName("NewName"+count)}>Click to Change</button>
    //   <h1>Name changes here:{name} </h1> */}
    //   <Check val1="11" val2="33"/>   
    //   <Check val1="28" val2="41"/>
    //   <Show name="CGU" age="69"/>
    //   <Show name="Pavan Sir" age="20"/>
    //   <Counter/>

    //         {/* <Home />
    //   <Reviews />
    //   <Contact />
    //   <About /> */}
    //   {/* <Check /> */}
    // </div>
  )
}
export default App
