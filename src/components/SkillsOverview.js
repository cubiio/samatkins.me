import React, { Component } from 'react'

class SkillsOverview extends Component {
  render () {
    return (
      <div className='skills-section'>
        <div>
          <h2 className='skills-header'>Skills and Experience</h2>
        </div>
        <div className='skills-wrapper'>
          <div className='skills-one'>
            <h2>Front-End:</h2>
            <ul>
              <li>JavaScript</li>
              <li>React & React Native</li>
              <li>HTML5, Jinja2, Nunjucks</li>
              <li>CSS3 & Sass</li>
            </ul>
          </div>
          <div className='skills-two'>
            <h2>Back-End:</h2>
            <ul>
              <li>Python</li>
              <li>Python Flask</li>
              <li>SQL</li>
            </ul>
          </div>
          <div className='skills-three'>
            <h2>Other Skills:</h2>
            <ul>
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
