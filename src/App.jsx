import React, { useState } from 'react'
import "./index.css"
import "./App.css"
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Home from './components/sections/Home'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import Footer from './components/Footer'

const App = () => {
  const [isLoaded , setIsLoaded] = useState(false);
  const [menuOpen , setMenuOpen] = useState();

  let content = null;
  if (isLoaded){
    content = (
      <>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
      </>
    )
  }

  return (
    <>
      {!isLoaded && (<LoadingScreen onComplete={() => setIsLoaded(true)}/>)}
      {content}
    </>
  )
}

export default App
