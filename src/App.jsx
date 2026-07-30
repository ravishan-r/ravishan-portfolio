import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './index.css'
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  const [count, setCount] = useState(0)

  return (
        <>
      <Navbar />

      <main>
        {/* <Hero />
        <About /> */}
      </main>

      <Footer />
    </>
  )
}

export default App
