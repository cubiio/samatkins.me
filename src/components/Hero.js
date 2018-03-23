import React from 'react';
import styled from 'styled-components';
import HeroLists from '../components/HeroLists';
import { NAV_ANCHOR, NAV_ANCHOR_HOVER } from '../lib/theme/colours';

const Hero = () => (
  <HeroWrapper>
    <HeroIntro>
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
    </HeroIntro>
    <HeroLists />
  </HeroWrapper>
);

export default Hero;

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 700px) {
    width: 95%;
    text-align: center;
  }
`;

const HeroIntro = styled.div`
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 700px) {
    width: 95%;
  }

  a {
    color: ${NAV_ANCHOR};
    text-decoration: none;
  }

  a:hover {
    color: ${NAV_ANCHOR_HOVER};
  }
`;
