import './App.css'
import { Navbar } from './common/Navbar'
import { AboutMe } from './sections/AboutMe'
import { Hero } from './sections/Hero'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
    </>
  )
}

export default App
