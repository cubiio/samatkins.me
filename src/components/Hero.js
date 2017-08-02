import React, { Component } from 'react'
import SkillsOverview from '../components/SkillsOverview'
import styled from 'styled-components'

class Hero extends Component {
  render () {
    return (
      <HeroWrapper>
        <HeroTagline>Dad. Husband. Web developer.</HeroTagline>
        <HeroIntro>
          <p>I’m a Junior Full-Stack Developer at <a href='https://www.bighealth.com/'>Big Health</a>.</p>
        </HeroIntro>
        <SkillsOverview />
      </HeroWrapper>
    )
  }
}

export default Hero

/*
Styles
 */

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

const HeroTagline = styled.h2`
  align-self: center;
  color: #212121;
  display: flex;
  font-family: $general-font;
  margin-left: auto;
  margin-right: auto;
`

const HeroIntro = styled.div`
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  max-width: 45%;

  a {
    color: $nav-anchor-color;
    text-decoration: none;
  }
`
