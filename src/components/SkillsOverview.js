import React, { Component } from 'react'
import styled from 'styled-components'

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
      <SkillsSection>
        <SkillsHeader>Skills and Experience</SkillsHeader>
        <SkillsWrapper>{this.renderSkills()}</SkillsWrapper>
      </SkillsSection>
    )
  }
}

export default SkillsOverview

/*
Styles
 */

const SkillsSection = styled.div`
  border-radius: 6px;
  font-size: 18px;
  font-weight: 200;
  line-height: 30px;
  margin: 50px auto 0;
  padding: 5px;
  width: 90%;
`

// TODO use scale ratio or rythm unit instead of font size
const SkillsHeader = styled.h2`
  font-size: 30px;
  padding-top: 10px;
  text-align: center;
`

// TODO Add below to @media query row for large screens; column for small screens
const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-family: $general-font;
  justify-content: space-around;
`
