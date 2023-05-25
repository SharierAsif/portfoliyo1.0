import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import HeaderMenu from './Components/HeaderMenu'
import Home from './Components/Home'
import Nav from './Components/Nav'
import NavBar from './Components/NavBar'
import Portfolio from './Components/Portfolio'
import SideBar from './Components/SideBar'
import Skilles from './Components/Skilles'
import Testomonial from './Components/Testomonial'

function App() {
  

  return (
    <div className='m-auto font-sans bg-white relative'>
    <HeaderMenu/>
    <Home/>
    <About/>
    <Skilles/>
    <Portfolio/>
    <Testomonial/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App
