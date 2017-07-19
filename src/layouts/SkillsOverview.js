import React, { Component } from 'react'

class SkillsOverview extends Component {
  render () {
    return (
      <div className='about__section'>
        <div className='about__title'>
          <h2 className='about__header'>Skills and Experience</h2>
        </div>
        <div className='about__wrapper'>
          <div className='about__front'>
            <h2>Front-End:</h2>
            <ul className='about__skills'>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>HTML5, Jinja2, Nunjucks</li>
              <li>CSS3 & Sass</li>
            </ul>
          </div>
          <div className='about__back about__skills'>
            <h2>Back-End:</h2>
            <ul className='about__skills'>
              <li>Python</li>
              <li>Python Flask</li>
              <li>SQL</li>
            </ul>
          </div>
          <div className='about__tools about__skills'>
            <h2>Other Skills:</h2>
            <ul className='about__skills'>
              <li>Git</li>
              <li>Gulp</li>
              <li>macOS & Linux Ubuntu</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default SkillsOverview
