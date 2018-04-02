import React from 'react';
import * as Styles from './SMIcons.styles';
import { fa } from '../../assets/images';

const SMIcons = () => (
  <Styles.SocialContainer>
    <Styles.SocialLogo>
      <a
        href="https://github.com/cubiio"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={fa.github} alt="github" />
      </a>
    </Styles.SocialLogo>
    <Styles.SocialLogo>
      <a
        href="https://www.linkedin.com/in/atkinssam/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={fa.linkedin} alt="linkedin" />
      </a>
    </Styles.SocialLogo>
    <Styles.SocialLogo>
      <a
        href="https://twitter.com/samatkins"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={fa.twitter} alt="twitter" />
      </a>
    </Styles.SocialLogo>
  </Styles.SocialContainer>
);

export default SMIcons;
