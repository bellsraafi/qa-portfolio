import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import CertsEducation from './components/CertsEducation.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'
import Reveal from './components/Reveal.jsx'

export default function App() {
  return (
    <>
      <Hero />
      <main>
        <Reveal id="about" className="about">
          <About />
        </Reveal>
        <Reveal id="experience" className="experience">
          <Experience />
        </Reveal>
        <Reveal id="skills" className="skills">
          <Skills />
        </Reveal>
        <Reveal id="education" className="certs">
          <CertsEducation />
        </Reveal>
        <Reveal id="contact" className="contact">
          <Contact />
        </Reveal>
        <Footer />
      </main>
      <BackToTop />
    </>
  )
}
