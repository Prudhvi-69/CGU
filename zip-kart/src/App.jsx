import './App.css'
// import { HomePage } from './components/Home'
// import { Reviews } from './components/Reviews'
// import { Contactus } from './components/Contactus'
import Counts from './components/FunCompCount'
import Counter from './components/Counter'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { HomePage } from './components/Home'
import { Reviews } from './components/Reviews'
import { Contactus } from './components/Contactus'
function App() {
  return (
  <BrowserRouter>
    <nav>
      <Link to="/">Home</Link>  |  
      <Link to="/reviews">Reviews</Link>  |  
      <Link to="/services">Services</Link>  |  
      <Link to="/about">About</Link>  |  
      <Link to="/contactus">Contact Us</Link>  |  
      <Link to="/login">Login</Link>
    </nav>
    <Routes>
      <Route path="/" element={<HomePage/> } />
      <Route path="/reviews" element={<Reviews/>} />
      <Route path="/services" element={<h1>This is Services Page</h1>} />
      <Route path="/about" element={<h1>About Page</h1>} />
      <Route path="/contactus" element={<Contactus/>} />
      <Route path="/login" element={<h1>Login Page</h1>} />
    </Routes>
  </BrowserRouter>


    // {/* <Counts name="CGU" age="69"/>
    // <Counts name="Subhankar" age="45"/>
    // <Counter/> */}
  )
}
export default App
