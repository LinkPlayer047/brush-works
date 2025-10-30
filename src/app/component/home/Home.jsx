import React from 'react'
import Hero from './component/Hero'
import Choose from './component/Choose'
import Services from './component/Services'
import Projects from './component/Projects'
import Clients from './component/Clients'
import About from './component/About'

const Home = () => {
  return (
    <div>
        <Hero />
        <Choose />
        <About />
        <Services />
        <Projects />
        <Clients />
    </div>
  )
}

export default Home
