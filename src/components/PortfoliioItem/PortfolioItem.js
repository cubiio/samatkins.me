import React from 'react';
import PropTypes from 'prop-types';
import * as Styles from './PortfolioItem.styles';

const PortfolioItem = ({ project }) => {
  const {
    portfolioTitle,
    portfolioImage,
    portfolioAlt,
    portfolioSnippet,
    portfolioSourceURL,
    portfolioSummary,
  } = project;

  return (
    <Styles.ProjectWrapper>
      <Styles.ProjectTitle>{portfolioTitle}</Styles.ProjectTitle>
      <Styles.ProjectSnippet>{portfolioSnippet}</Styles.ProjectSnippet>
      <Styles.ProjectImage src={portfolioImage} alt={portfolioAlt} />
      <Styles.ProjectSummary>{portfolioSummary}</Styles.ProjectSummary>
      <Styles.ProjectLink>
        <a href={portfolioSourceURL} target="_blank">
          Source code
        </a>
      </Styles.ProjectLink>
    </Styles.ProjectWrapper>
  );
};

PortfolioItem.propTypes = {
  project: PropTypes.shape.isRequired,
};

export default PortfolioItem;
