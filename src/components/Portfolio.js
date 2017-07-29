import React, { Component } from 'react'
const portfolio = require('../../data/projects.json')

class Portfolio extends Component {
  constructor (props) {
    super(props)
    this.state = {
      portfolio
    }
  }

  renderProject () {
    const project = this.state.portfolio
    return project.map(p =>
      <div key={p.portfolioTitle} p={p}>{p.portfolioTitle}</div>
    )
  }

  render () {
    return (
      <div>
        {this.renderProject()}
      </div>
    )
  }
}

export default Portfolio
