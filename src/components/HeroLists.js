import React from 'react';
import styled from 'styled-components';
import List from './List';

const heroInfo = require('../data/hero.json');

const HeroLists = () => (
  <HeroWrapper>
    <HeroHeader>My Tech Stack</HeroHeader>
    <ListWrapper>
      {heroInfo.map(heroGroup => (
        <List key={heroGroup.id} heroGroup={heroGroup} />
      ))}
    </ListWrapper>
  </HeroWrapper>
);

export default HeroLists;

const HeroWrapper = styled.div`
  padding: 5px;

  @media (max-width: 700px) {
    width: 95%;
    text-align: center;
  }
`;

const HeroHeader = styled.h2`
  padding-top: 10px;
  text-align: center;
`;

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-column-gap: 50px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 700px) {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    grid-template-columns: 50% 50%;
    grid-column-gap: 5px;
  }
`;
