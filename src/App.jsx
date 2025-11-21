import './App.css'
import About from './components/sections/About'
import Footer from './components/sections/Footer'
import Gallery from './components/sections/Gallery'
import Header from './components/sections/Header'
import Hero from './components/sections/Hero'
import Intro from './components/sections/Intro'
import Menu from './components/sections/Menu'
import Reservations from './components/sections/Reservations'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Intro />
      <Menu />
      <About />
      <Gallery />
      <Reservations />
      <Footer />
    </>
  )
}

export default App
