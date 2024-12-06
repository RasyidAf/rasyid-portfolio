import React from 'react'
import Home from './Home'
import About from './About'
import Skill from './Skill'
import Learn from './Learn'
import Project from './Project'
import Carousel from './Carousel'

const Main = () => {
  return (
    <main className=''>
        <Home />
        <About />
        <Skill />
        <Learn />
        <Project />
        <Carousel />
    </main>
  )
}

export default Main