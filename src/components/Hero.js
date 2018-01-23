import React from 'react';
import styled from 'styled-components';
import HeroLists from '../components/HeroLists';
import { NAV_ANCHOR, NAV_ANCHOR_HOVER } from '../lib/theme/colours';

const Hero = () => (
  <HeroWrapper>
    <HeroTagLine>Dad. Husband. Web developer.</HeroTagLine>
    <HeroIntro>
      <p>
        I live in London with my family, and I'm a Software Engineer at{' '}
        <a href="https://www.bighealth.com/">Big Health</a>. I work across
        front-end and back-end technologies including React, React Native, PHP,
        Python and Docker.
      </p>
      <p>
        My background is in supply chain and project management, and I worked
        for over nine years in Big Four management consulting.
      </p>
      <p>
        Outside of work, I’m a family man and I like cycling, mountain biking,
        football and rugby.
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

const HeroTagLine = styled.h2`
  align-self: center;
  color: #212121;
  display: flex;
  font-family: $general-font;
  margin-left: auto;
  margin-right: auto;
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
