import { useState } from 'react'
import './index.css'
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from './components/sections/Hero';
function App() {
  const [count, setCount] = useState(0)

  return (
        <>
      <Navbar />

      <main>
        <Hero />
        {/* <About /> */}
      </main>

      <Footer />
    </>
  )
}

export default App
