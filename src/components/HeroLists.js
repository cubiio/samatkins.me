import React, { Component } from 'react'
import styled from 'styled-components'

import List from './List'
const data = require('../../data/hero.json')

class HeroLists extends Component {
  constructor (props) {
    super(props)
    this.state = { data }
  }

  renderInfo () {
    return this.state.data.map(d =>
      <List key={d.group} d={d} />
    )
  }

  render () {
    return (
      <HeroWrapper>
        <HeroHeader>My tech stack:</HeroHeader>
        <ListWrapper>{this.renderInfo()}</ListWrapper>
      </HeroWrapper>
    )
  }
}

export default HeroLists

/*
Styles
 */

const HeroWrapper = styled.div`
  border-radius: 6px;
  font-weight: 200;
  line-height: 30px;
  margin-left: auto;
  margin-right: auto;
  padding: 5px;
  width: 50%;

  @media (max-width: 700px) {
    width: 95%;
    text-align: center;
  }
`

// TODO use scale ratio or rythm unit instead of font size
const HeroHeader = styled.h2`
  padding-top: 10px;
  text-align: center;
`

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 700px) {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
`
