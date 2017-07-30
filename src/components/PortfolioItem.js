import React from 'react'
import PropTypes from 'prop-types'

const PortfolioItem = ({ project }) => {
  const {
    portfolioTitle,
    portfolioImage,
    portfolioAlt,
    portfolioSnippet,
    portfolioSourceURL,
    portfolioSummary
  } = project

  return (
    <section>
      <div className='project-title'>{portfolioTitle}</div>
      <div className='project-snippet'>{portfolioSnippet}</div>
      <img className='project-image' src={portfolioImage} alt={portfolioAlt} />
      <div>{portfolioSummary}</div>
    </section>
  )
}

PortfolioItem.propTypes = {
  portfolioTitle: PropTypes.string
}

export default PortfolioItem
