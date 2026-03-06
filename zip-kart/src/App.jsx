import './App.css'
// import { HomePage } from './components/Home'
// import { Reviews } from './components/Reviews'
// import { Contactus } from './components/Contactus'
import Counts from './components/FunCompCount'
import Counter from './components/Counter'
function App() {
  return (
  <>    
    <Counts name="CGU" age="69"/>
    <Counts name="Subhankar" age="45"/>
    <Counter/>
  </>
  )
}
export default App
