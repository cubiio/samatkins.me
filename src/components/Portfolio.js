import React from 'react';
import styled from 'styled-components';
import PortfolioItem from './PortfolioItem';
import projects from '../data/portfolio';

const Portfolio = () => (
  <PortfolioWrapper>
    {projects.map(project => (
      <PortfolioItem key={project.id} project={project} />
    ))}
  </PortfolioWrapper>
);

export default Portfolio;

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
`;
