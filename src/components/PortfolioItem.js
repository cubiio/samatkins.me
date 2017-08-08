import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
  HEADER_SHADOW,
  NAV_ANCHOR,
  NAV_ANCHOR_HOVER
} from '../lib/theme/colours'

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
    <ProjectWrapper>
      <ProjectTitle>{portfolioTitle}</ProjectTitle>
      <ProjectSnippet>{portfolioSnippet}</ProjectSnippet>
      <ProjectImage src={portfolioImage} alt={portfolioAlt} />
      <ProjectSummary>{portfolioSummary}</ProjectSummary>
      <ProjectLink>
        <a href={portfolioSourceURL}>Source code</a>
      </ProjectLink>
    </ProjectWrapper>
  )
}

PortfolioItem.propTypes = {
  portfolioTitle: PropTypes.string
}

export default PortfolioItem

/*
Styles
 */

const ProjectWrapper = styled.div`
  flex: 1;
  box-shadow: 0 2px 5px ${HEADER_SHADOW};
  justify-content: center;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 70%;

  @media (max-width: 700px) {
    width: 95%;
  }
`

const ProjectTitle = styled.h3`
  font-weight: bold;
  padding-top: 25px;
  text-align: center;
`

const ProjectSnippet = styled.h4`
  font-weight: bold;
  padding-bottom: 10px;
  padding-top: 10px;
  text-align: center;
`

const ProjectImage = styled.img`
  align-self: center;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  max-width: 75%;
`

const ProjectSummary = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: justify;
  width: 50%;

  @media (max-width: 700px) {
    width: 90%;
  }
`

const ProjectLink = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;
  text-align: center;

  a {
    color: ${NAV_ANCHOR};
    text-decoration: none;
  }

  a:hover {
    color: ${NAV_ANCHOR_HOVER};
}
`
// background-color: ${NAV_ANCHOR};
