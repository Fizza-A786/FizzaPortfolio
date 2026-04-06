import React from 'react'
import Hero from '../Component/About/Hero'
import Education from '../Component/About/Education'
import Skills from '../Component/About/Skills'

const About = ({ darkMode }) => {
  return (
    <div>
        <Hero darkMode={darkMode}/>
        <Skills darkMode={darkMode}/>
        <Education darkMode={darkMode}/>
    </div>
  )
}

export default About