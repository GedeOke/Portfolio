import './App.css'
import Navbar from './components/layout/Navbar'
import Home from './components/Home'
import Footer from './components/layout/Footer'
function App() {
  return (
    <div className='bg-gradient-to-b from-[#0f172a] via-[#0a0f1f] to-[#1a103f] text-white'>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App
