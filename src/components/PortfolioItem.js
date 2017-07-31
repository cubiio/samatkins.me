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
    <div className='project-wrapper'>
      <div className='project-title'>{portfolioTitle}</div>
      <div className='project-snippet'>{portfolioSnippet}</div>
      <img className='project-image' src={portfolioImage} alt={portfolioAlt} />
      <div className='project-summary'>{portfolioSummary}</div>
      <div className='project-link'>
        <a href={portfolioSourceURL}>Source code</a>
      </div>
    </div>
  )
}

PortfolioItem.propTypes = {
  portfolioTitle: PropTypes.string
}

export default PortfolioItem
