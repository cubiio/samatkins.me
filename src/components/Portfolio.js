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
      <section className='portfolio-section'>
        {this.renderPortfolio()}
      </section>
    )
  }
}

export default Portfolio
