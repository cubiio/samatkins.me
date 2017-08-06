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
        <HeroHeader>{`<Code />`}</HeroHeader>
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

`

// TODO use scale ratio or rythm unit instead of font size
const HeroHeader = styled.h2`
  padding-top: 10px;
  text-align: center;
`

// TODO Add below to @media query row for large screens; column for small screens
const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

`
