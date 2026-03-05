import './App.css'
import { HomePage } from './components/Home'
import { Reviews } from './components/Reviews'
import { Contactus } from './components/Contactus'
function App() {
  return (
  <>    
    <h1>ZipKart</h1>
    <p>Welcome to ZipKart, your one-stop destination for all your shopping needs!</p>
    <HomePage />
    <Reviews />
    <Contactus />
    </>
  )
}

export default App
