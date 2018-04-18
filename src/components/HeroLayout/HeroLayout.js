import React from 'react';
import HeroLists from '../HeroLists';
import HeroTextSwitcher from '../HeroTextSwitcher';
import * as Styles from './HeroLayout.styles';

const HeroLayout = () => (
  <Styles.HeroWrapper>
    <Styles.HeroIntro>
      <HeroTextSwitcher />
    </Styles.HeroIntro>
    <HeroLists />
  </Styles.HeroWrapper>
);

export default HeroLayout;
