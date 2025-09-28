
import Footer from './Footer';
import MusicPlayer from './MusicPlayer';
import Navbar from './Navbar';
import About from './sections/About';
import Contact from './sections/Contact';
import Home from './sections/Home';
import Projects from './sections/Projects';

const Main = () => {

  return (
    <>
      <Navbar />
        <MusicPlayer songList={[{ artist: "Sadra Music", title: "Wonderland", url: "/lorde.mp3" }]} />
          <Home />
          <About />
          <Projects />
          <Contact />
          <Footer />
    </>
  )
}

export default Main
