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
    return this.state.data.map((d, listIdx) => <List key={listIdx} d={d} />)
  }

  render () {
    return (
      <HeroWrapper>
        <HeroHeader>My tech stack:</HeroHeader>
        <ListWrapper>
          {this.renderInfo()}
        </ListWrapper>
      </HeroWrapper>
    )
  }
}

export default HeroLists

/*
Styles
 */

const HeroWrapper = styled.div`
  padding: 5px;

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
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-column-gap: 50px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 700px) {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    grid-template-columns: 50% 50%;
    grid-column-gap: 5px;
  }
`
