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
          <p>I live in London with my family, and I work at <a href='https://www.bighealth.com/'>Big Health</a> as a Junior Full-Stack Developer. I work across front-end and back-end technologies but my passion is front-end, and I currently work and play around with React and React Native.</p>
          <p>My background is in supply chain and project management, and I worked for over nine years in Big Four management consulting.</p>
          <p>Outside of work, I’m a family man and I like cycling, mountain biking, football and rugby.</p>
          <p>This is my personal website, my portfolio, my blog, and with info on the technologies I use and want to learn. Apologies for the lack of design on the site - partly due to time constraints but mainly because I need to learn more about good design.</p>
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
  width: 40%;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 700px) {
    width: 95%;
    text-align: center;
  }
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
  ${'' /* max-width: 45%; */}

  @media (max-width: 700px) {
    width: 95%;
  }

  a {
    color: ${NAV_ANCHOR};
    text-decoration: none;
  }

  a:hover {
    color: ${NAV_ANCHOR_HOVER}
  }
`
