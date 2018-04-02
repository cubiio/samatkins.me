import React from 'react';
import List from '../List';
import * as Styles from './HeroLists.styles';

const heroInfo = require('../../data/hero.json');

const HeroLists = () => (
  <Styles.HeroWrapper>
    <Styles.HeroHeader>My Tech Stack</Styles.HeroHeader>
    <Styles.ListWrapper>
      {heroInfo.map(heroGroup => (
        <List key={heroGroup.id} heroGroup={heroGroup} />
      ))}
    </Styles.ListWrapper>
  </Styles.HeroWrapper>
);

export default HeroLists;
