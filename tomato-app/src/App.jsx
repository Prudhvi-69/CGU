import './App.css'
// import { LoginPage } from './components/Login'
// import Check from './components/BasicProp'
// import { useState } from 'react';
// import Checks from './components/ClassComp';
// import Checks from './components/functionCompWithMounting';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import { LoginPage } from './components/Login';
import { Home } from './components/Home';
import { About } from './components/About';
import { Reviews } from './components/Reviews';
import { Register } from './components/Register';
import { ErrorPage } from './components/Errorpage';
import Checks from './components/ClassComp';
import Check from './components/BasicProp';
import StudentForm from './pages/StudentForm';
import { useState, useEffect } from 'react';
import FetchData from './pages/FetchData';
function App() {
  const [users, setUsers] = useState([]);
//fetching from jsonplaceholder
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())  //converts raw into json format 
      .then(data => setUsers(data)); // 
  }, []);

  return(
    <>
    <h1> Users Data </h1>
    {users.map(user => (
      <div>
          <p key={user.id}>Name: {user.name}</p>
          <p key={user.id}>Email: {user.email}</p>
          <p key={user.id}>Phone: {user.phone}</p>
          <p key={user.id}>Website: {user.website}</p>
      </div>
      ))}
    </>
// return(
// <>
//     <BrowserRouter>
//     <nav>
//       {/* <Link to="/">Home</Link> |
//       <Link to="/about">About</Link> |
//       <Link to="/contact">Contact</Link> |
//       <Link to="/login">Login</Link>  |
//       <Link to="/register">Register</Link>  |
//       <Link to="/reviews">Reviews</Link>  |
//       <Link to="/services">Services</Link>   */}
//       <NavLink to="/">Home</NavLink> | 
//       <NavLink to="/about" style={ ( {isActive} ) => ({
//         color : isActive ? "green" : "blue"
//       })}>About</NavLink> | 
//       <NavLink to="/contact" style={ ( {isActive} ) => ({
//         color : isActive ? "yellow" : "blue"
//       })}>Contact</NavLink> |
//       <NavLink to="/login" style={ ( {isActive} ) => ({
//         color : isActive ? "red" : "blue"
//       })}>Login</NavLink> | 
//       <NavLink to="/register" style={ ( {isActive} ) => ({
//         color : isActive ? "hotpink" : "blue"
//       })}>Register</NavLink> | 
//       <NavLink to="/reviews" style={ ( {isActive} ) => ({
//         color : isActive ? "skyblue" : "blue"
//       })}>Reviews</NavLink> | 
//       <NavLink to="/services" style={ ( {isActive} ) => ({
//         color : isActive ? "orange" : "blue"
//       })}>Services</NavLink> 
//       <NavLink to="/Form" style={ ( {isActive} ) => ({
//         color : isActive ? "purple" : "blue" 
//       })}>Student Form</NavLink>
//       <navLink to="/fetchdata" style={ ( {isActive} ) => ({
//         color : isActive ? "cyan" : "blue"
//       })}>Fetch Data</navLink>
//     </nav>  
//     <Routes>
//       <Route path="/" element={<Home/>}/>
//       <Route path="/about" element={<About/>}/>
//       <Route path="/contact" element={<h1>Contact Page</h1>} />
//       <Route path="/login" element={<LoginPage/>} />
//       <Route path="/register" element={<Register/>} />
//       <Route path="/reviews" element={<Reviews name="CGU"/>} />
//       <Route path="/services" element={<h1>Services Page</h1>} />
//       <Route path="/successLogin" element={<h1>Login Successful, welcome to our App</h1>} />  
//       <Route path="*" element={<ErrorPage/>} />
//       <Route path="/Form" element={<StudentForm/>} />
//       <Route path="/fetchdata" element={<FetchData/>} />
//     </Routes>
//     <Check name="CGU" age="44"/>

      
//     </BrowserRouter>
       
//       {/* <Checks /> */}
    // </>
  )
}
export default App;
  // const [count,setCount] = useState(0);
  // const [name,setName] = useState('Name');
  // return (
  //   <>  
  //   <button onClick={() => setCount((count) => count + 1)}>
  //    count is {count}
  //   </button>
 
  //   <button onClick={() => setName((name) => name +count+" times")}>
  //   {name}
  //   </button>
  //     <h1>Tomato App</h1>
  //     <LoginPage />
  //     <Check name="CGU" age="96"/>
  //     <Check name="BBSR" age="699"/>

    
      /* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */
    
  
// }

// export default App
