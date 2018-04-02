import React from 'react';
import HeroLists from '../HeroLists';
import * as Styles from './Hero.styles';

const Hero = () => (
  <Styles.HeroWrapper>
    <Styles.HeroIntro>
      <br />
      <p>
        Hi, I&#39;m Sam, welcome to my site! I&#39;m a Software Engineer at{' '}
        <a href="https://www.bighealth.com/">Big Health</a> and I&#39;m enjoying
        doing work that matters. I work across front and back-end technologies
        including React, React Native, and Python.
      </p>
      <p>
        My background is in supply chain and project management, and I worked
        for over nine years in Big Four management consulting.
      </p>
      <p>
        Outside of work, I&#39;m a family man and I like cycling, mountain
        biking, football and rugby.
      </p>
    </Styles.HeroIntro>
    <HeroLists />
  </Styles.HeroWrapper>
);

export default Hero;
