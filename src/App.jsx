import React,{useEffect} from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Experience from './Components/Experience'
import Skills from './Components/Skills'
import Project from './Components/Project'
import Contact from './Components/Contact'
import Aos from 'aos'
import 'aos/dist/aos.css'

const App = () => {

useEffect(() => {
Aos.init();

  
}, [])


  return (
    <>
    <Navbar/>
    <div className="container">
      <Home/>
      
      <Skills/>
      <Project/>
      <Contact/>
    </div>
    </>
  )
}



export default App
