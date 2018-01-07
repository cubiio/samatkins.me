import React from 'react';
import styled from 'styled-components';
import { fa } from '../assets/images';

const SMIcons = () => (
    <SocialContainer>
      <SocialLogo>
        <a href="https://github.com/cubiio">
          <img src={fa.github} alt="github" />
        </a>
      </SocialLogo>
      <SocialLogo>
        <a href="https://www.linkedin.com/in/atkinssam/">
          <img src={fa.linkedin} alt="linkedin" />
        </a>
      </SocialLogo>
      <SocialLogo>
        <a href="https://twitter.com/cubiio">
          <img src={fa.twitter} alt="twitter" />
        </a>
      </SocialLogo>
    </SocialContainer>
  );

export default SMIcons;

const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 5px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 2.5em;
  width: 25%;
  overflow: auto;

  @media (max-width: 700px) {
    width: 80%;
    margin-top: 0;
  }
`;

const SocialLogo = styled.div`
  height: 30px;
  padding-left: 2px;
  padding-right: 2px;
  margin-left: auto;
  margin-right: auto;
  width: 30px;
`;
