import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { logo } from '../assets/images';
import { siteLogoAlt } from '../config/siteConfig';
import {
  HEADER_SHADOW,
  NAV_ANCHOR,
  TITLE_TEXT_COLOR,
} from '../lib/theme/colours';

const Header = () => (
  <HeaderWrapper>
    <HeaderInner>
      <Link to="/">
        <HeaderLogo src={logo.avatar} alt={siteLogoAlt} />
      </Link>
      <HeaderTitle>
        <StyledLink to="/">Sam Atkins: Software Engineer</StyledLink>
      </HeaderTitle>
    </HeaderInner>
  </HeaderWrapper>
);

export default Header;

const HeaderWrapper = styled.div`
  box-shadow: 0 2px 5px ${HEADER_SHADOW};
  min-height: 56px;
  transition: min-height 0.3s;
  width: 100%;
`;

const HeaderInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

const HeaderLogo = styled.img`
  border-radius: 50px;
  height: 72px;
  margin-bottom: 1em;
  margin-left: 1em;
  margin-right: 1em;
  margin-top: 1em;
  vertical-align: top;
`;

const HeaderTitle = styled.h1`
  display: inline-block;
  margin: 0.75em 0.25em;

  @media (max-width: 700px) {
    font-size: 0;
  }

  a {
    color: ${TITLE_TEXT_COLOR};
    text-decoration: none;
  }
`;

const StyledLink = styled(Link)`
  display: inline-block;
  color: ${NAV_ANCHOR};
  text-decoration: none;
  position: relative;
`;
