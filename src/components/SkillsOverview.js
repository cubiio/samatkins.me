import React, { Component } from 'react'
import SkillList from './SkillList'
const skills = require('../../data/skills.json')

class SkillsOverview extends Component {
  constructor (props) {
    super(props)
    this.state = { skills }
  }

  renderSkills () {
    return this.state.skills.map(skill =>
      <SkillList key={skill.group} skill={skill} />
    )
  }

  render () {
    return (
      <div className='skills-section'>
        <h2 className='skills-header'>Skills and Experience</h2>
        <div className='skills-wrapper'>{this.renderSkills()}</div>
      </div>
    )
  }
}

export default SkillsOverview
