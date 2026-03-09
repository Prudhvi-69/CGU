import './App.css'
// import { Home } from './components/Home'
// import { Reviews } from './components/Reviews'
// import { Contact } from './components/Contact'
// import { About } from './components/About'
// import Check from './components/FileMain';
// import Show from './components/Showing';
// import Counter from './components/ClassComp';
// import Counter from './components/FuncCompCounter';

// import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Reviews } from './components/Reviews'
import { Login } from './components/Login'
function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>   |     
         <Link to="/reviews"> Reviews</Link>    |     
         <Link to="/contact"> Contact</Link>   |     
         <Link to="/about"> About</Link>   |     
         <Link to="/services"> Services</Link>   |     
         <Link to="/login"> Login</Link>   |     
         <Link to="/register"> Register</Link>       
      </nav> 
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/reviews" element={<Reviews/>} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/services" element={<h1>Services Page</h1>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<h1>Register Page</h1>} />
      </Routes>
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
