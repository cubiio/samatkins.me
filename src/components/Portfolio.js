import React, { Component } from 'react'
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
      <div>
        {this.renderPortfolio()}
      </div>
    )
  }
}

export default Portfolio
