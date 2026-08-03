import { useState } from 'react'
import './index.css'
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
function App() {
  const [count, setCount] = useState(0)

  return (
        <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>

      <Footer />
    </>
  )
}

export default App
