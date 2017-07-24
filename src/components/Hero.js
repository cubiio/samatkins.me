import React, { Component } from 'react'
import SkillsOverview from '../components/SkillsOverview'

class Hero extends Component {
  render () {
    return (
      <div className='hero-wrapper'>
        <h2 className='hero-tagline'>Dad. Husband. Web developer.</h2>
        <div className='hero-intro'>
          <p>I’m a Junior Full-Stack Developer at <a href='https://www.bighealth.com/'>Big Health</a>.</p>
        </div>
        <SkillsOverview />
      </div>
    )
  }
}

export default Hero
