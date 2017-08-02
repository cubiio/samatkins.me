import React from 'react'
import styled from 'styled-components'

import images from '../../assets/images'

const SMIcons = () => {
  return (
    <SocialContainer>
      <SocialLogo>
        <a href='https://github.com/cubiio' target='_blank'>
          <img src={images.fa.github} />
        </a>
      </SocialLogo>
      <SocialLogo>
        <a href='https://www.linkedin.com/in/atkinssam/' target='_blank'>
          <img src={images.fa.linkedin} />
        </a>
      </SocialLogo>
      <SocialLogo>
        <a href='https://twitter.com/cubiio' target='_blank'>
          <img src={images.fa.twitter} />
        </a>
      </SocialLogo>
    </SocialContainer>
  )
}

export default SMIcons

/*
Styles
 */

const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 2.5em;
  width: 25%;
`

const SocialLogo = styled.div`
  height: 30px;
  padding-left: 2px;
  padding-right: 2px;
  margin-left: auto;
  margin-right: auto;
  width: 30px;
`
