import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Lab from './components/Lab'
import Learning from './components/Learning'
function App() {
  return (
    <>
    {/*Navbar section*/}
      <Navbar />
      {/*Hero section*/}
      <Hero />
      {/* About section */}
      <About />
      {/* Projects section */}
      <Projects />
      {/*Learning Section*/}
      <Learning />
      {/* LAB SECTION */}
      <Lab />
      {/* Contact section */}
      <Contact />
      {/*Footer */}
      <Footer />
    </>
  )
}
export default App