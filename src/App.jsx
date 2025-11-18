import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Marquee from './components/Marquee'
import Rules from './components/Rules'
import Services from './components/Services'
import Cases from './components/Cases'
import Clients from './components/Clients'
import Contact from './components/Contact'

function App(){
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Marquee />
      <Rules />
      <Services />
      <Cases />
      <Clients />
      <Contact />
      <footer className="text-center py-10 text-white/50 text-sm">© KEYSIKS AGENCY</footer>
    </div>
  )
}

export default App
