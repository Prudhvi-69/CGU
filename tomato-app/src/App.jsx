import './App.css'
// import { LoginPage } from './components/Login'
// import Check from './components/BasicProp'
// import { useState } from 'react';
// import Checks from './components/ClassComp';
// import Checks from './components/functionCompWithMounting';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { LoginPage } from './components/Login';
import { Home } from './components/Home';
import { About } from './components/About';
function App() {
  return(
    <>
    <nav>
      <Link to="/">Home</Link> |
      <Link to="/about">About</Link> |
      <Link to="/contact">Contact</Link> |
      <Link to="/login">Login</Link>  |
      <Link to="/register">Register</Link>  |
      <Link to="/reviews">Reviews</Link>  |
      <Link to="/services">Services</Link>  
    </nav>  
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<h1>Contact Page</h1>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<h1>Register Page</h1>} />
      <Route path="/reviews" element={<h1>Reviews Page</h1>} />
      <Route path="/services" element={<h1>Services Page</h1>} />
    </Routes>
    </>
    // <>    
    //   {/* <Checks /> */}
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
