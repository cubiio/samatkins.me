import React from 'react';
import SkillList from '../SkillList';
import * as Styles from './HeroLists.styles';

const heroInfo = require('../../data/hero.json');

const HeroLists = () => (
  <Styles.HeroWrapper>
    <Styles.ListWrapper>
      {heroInfo.map(heroGroup => (
        <SkillList key={heroGroup.id} heroGroup={heroGroup} />
      ))}
    </Styles.ListWrapper>
  </Styles.HeroWrapper>
);

export default HeroLists;
