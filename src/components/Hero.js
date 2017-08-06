import React, { Component } from 'react'
import styled from 'styled-components'

import HeroLists from '../components/HeroLists'

import { NAV_ANCHOR, NAV_ANCHOR_HOVER } from '../lib/theme/colours'

class Hero extends Component {
  render () {
    return (
      <HeroWrapper>
        <HeroTagline>Dad. Husband. Web developer.</HeroTagline>
        <HeroIntro>
          <p>I’m a Junior Full-Stack Developer at <a href='https://www.bighealth.com/'>Big Health</a>.</p>
        </HeroIntro>
        <HeroLists />
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
    color: ${NAV_ANCHOR};
    text-decoration: none;
  }

  a:hover {
    color: ${NAV_ANCHOR_HOVER}
  }
`
