import React, { Component } from 'react'
import styled from 'styled-components'

import PortfolioItem from './PortfolioItem'
const projects = require('../../data/portfolio')

class Portfolio extends Component {
  renderPortfolio () {
    return projects.map(project =>
      <PortfolioItem key={project.id} project={project} />
    )
  }

  render () {
    return (
      <PortfolioWrapper>
        {this.renderPortfolio()}
      </PortfolioWrapper>
    )
  }
}

export default Portfolio

/*
Styles
 */

const PortfolioWrapper = styled.section`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  line-height: 30px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 20px;
  width: 60%;

  @media (max-width: 700px) {
    width: 95%;
  }
`
