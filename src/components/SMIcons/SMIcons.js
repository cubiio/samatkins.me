import React from 'react';
import * as Styles from './SMIcons.styles';
import { fa } from '../../assets/images';

const config = require('../../config/siteConfig');

const SMIcons = () => (
  <Styles.SocialContainer>
    <Styles.SocialLogo>
      <a href={`${config.githubUrl}`} target="_blank" rel="noopener noreferrer">
        <img src={fa.github} alt="github" />
      </a>
    </Styles.SocialLogo>
    <Styles.SocialLogo>
      <a
        href={`${config.linkedInUrl}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={fa.linkedin} alt="linkedin" />
      </a>
    </Styles.SocialLogo>
    <Styles.SocialLogo>
      <a
        href={`${config.twitterUrl}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={fa.twitter} alt="twitter" />
      </a>
    </Styles.SocialLogo>
  </Styles.SocialContainer>
);

export default SMIcons;
