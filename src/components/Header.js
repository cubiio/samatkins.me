import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { logo } from '../../assets/images'
import { HEADER_SHADOW, TITLE_TEXT_COLOR } from '../lib/theme/colours'

class Header extends Component {
  render () {
    return (
      <HeaderWrapper>
        <HeaderInner>
          <div>
            <Link to='/'>
              <HeaderLogo
                src={logo.avatar} alt='Logo image - avatar of the author'
              />
            </Link>
            <HeaderTitle>
              <Link
                to='/'
              >
                Sam Atkins: Full Stack Web Developer
              </Link>
            </HeaderTitle>
          </div>
        </HeaderInner>
      </HeaderWrapper>
    )
  }
}

export default Header

/*
Styles
 */

const HeaderWrapper = styled.div`
  box-shadow: 0 2px 5px ${HEADER_SHADOW};
  min-height: 56px;
  transition: min-height .3s;
  width: 100%;
`

const HeaderInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`

const HeaderLogo = styled.img`
  border-radius: 50px;
  height: 72px;
  margin-bottom: 1em;
  margin-left: 1em;
  margin-right: 1em;
  margin-top: 1em;
  vertical-align: top;
`

const HeaderTitle = styled.h1`
  display: inline-block;
  font-family: $title-font;
  font-size: 2.5em;
  font-weight: 300;
  margin: .75em .25em;

  a {
    color: ${TITLE_TEXT_COLOR};
    text-decoration: none;
  }
`
