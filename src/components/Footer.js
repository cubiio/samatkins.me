import React, { Component } from 'react'
import styled from 'styled-components'

import { NAV_ANCHOR } from '../lib/theme/colours'

class Footer extends Component {
  render () {
    return (
      <FooterWrapper>
        <FooterContainer>
          <p>Built with ♥ by Sam. View source <a href='https://github.com/cubiio/samatkins.me'>code</a>. © 2016-2017 Sam Atkins</p>
        </FooterContainer>
      </FooterWrapper>
    )
  }
}

export default Footer

/*
Styles
 */

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1em;
`

const FooterContainer = styled.div`
  display: flex;
  font-size: 1.2em;
  justify-content: center;
  padding-top: 1em;

  a {
    color: ${NAV_ANCHOR};
    text-decoration: none;
  }
`
