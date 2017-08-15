import React from 'react'
import styled from 'styled-components'

import { NAV_ANCHOR, NAV_ANCHOR_HOVER } from '../lib/theme/colours'

const ReqComment = () => {
  return (
    <Wrapper>
      <Container>
        <hr />
        <p>Do you have any comments? You can tweet me at <a href='https://twitter.com/cubiio' target='_blank'>@cubiio</a>.</p>
      </Container>
    </Wrapper>
  )
}

export default ReqComment

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  overflow: auto;

  @media (max-width: 700px) {
    text-align: center;
  }
`

const Container = styled.div`
  width: 100%;

  a {
    color: ${NAV_ANCHOR};
    text-decoration: none;
  }

  a:hover {
    color: ${NAV_ANCHOR_HOVER}
  }
`
