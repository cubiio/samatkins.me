import React, { Component } from 'react'
import SkillsOverview from '../layouts/SkillsOverview'

class Hero extends Component {
  render () {
    return (
      <div className='hero__wrapper'>
        <h2 className='hero__tagline'>Dad. Husband. Web developer.</h2>
        <div className='hero__intro'>
          <p>I’m a Junior Full-Stack Developer at <a href='https://www.bighealth.com/'>Big Health</a>.</p>
        </div>
        <SkillsOverview />
      </div>
    )
  }
}

export default Hero
