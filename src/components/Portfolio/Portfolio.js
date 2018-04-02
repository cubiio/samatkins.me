import React from 'react';
import PortfolioItem from '../PortfolioItem';
import projects from '../../data/portfolio';
import * as Styles from './Portfolio.styles';

const Portfolio = () => (
  <Styles.PortfolioWrapper>
    {projects.map(project => (
      <PortfolioItem key={project.id} project={project} />
    ))}
  </Styles.PortfolioWrapper>
);

export default Portfolio;
