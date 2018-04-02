import React from 'react';
import Link from 'gatsby-link';
import * as Styles from './Header.styles';
import { logo } from '../../assets/images';
import { siteLogoAlt } from '../../config/siteConfig';

const Header = () => (
  <Styles.HeaderWrapper>
    <Styles.HeaderInner>
      <Link to="/">
        <Styles.HeaderLogo src={logo.beardedAvatar} alt={siteLogoAlt} />
      </Link>
      <Styles.HeaderTitle>
        <Styles.StyledLink to="/">
          Sam Atkins: Software Engineer
        </Styles.StyledLink>
      </Styles.HeaderTitle>
    </Styles.HeaderInner>
  </Styles.HeaderWrapper>
);

export default Header;
