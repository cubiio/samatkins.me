import React, { Component } from 'react'
import Link from 'gatsby-link'

import styled from 'styled-components'
import { NAV_ANCHOR } from '../lib/theme/colours'

class Nav extends Component {
  render () {
    return (
      <NavWrapper>
        <NavList>
          <NavItem>
            <NavAnchor to='/'>Home</NavAnchor>
          </NavItem>
          <NavItem>
            <NavAnchor to='/portfolio'>Portfolio</NavAnchor>
          </NavItem>
          <NavItem>
            <NavAnchor to='/blog'>Blog</NavAnchor>
          </NavItem>
        </NavList>
      </NavWrapper>
    )
  }
}

export default Nav

/*
Styles``
 */

const NavWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 60%;

  @media (max-width: 700px) {
    width: 95%;
  }
`

const NavAnchor = styled(Link)`
  color: ${NAV_ANCHOR};
  text-decoration: none;
`

const NavList = styled.ul`
  display: flex;
  justify-content: flex-start;
  margin: 0;
  max-width: 100%;
  padding: 0;
`

const NavItem = styled.li`
  box-sizing: border-box;
  display: flex;
  display: inline-block;
  flex: 1;
  line-height: 24px;
  padding: 10px;
  text-align: center;
  text-transform: uppercase;
  width: 20%;
`
