"use server";

import Footer from './Footer';
import Navbar from './Navbar';
import About from './sections/About';
import Contact from './sections/Contact';
import Home from './sections/Home';
import Projects from './sections/Projects';

const Main = () => {

  return (
      <>
          <Navbar />
          <Home />
          <About />
          <Projects />
          <Contact />
          <Footer />
    </>
  )
}

export default Main
