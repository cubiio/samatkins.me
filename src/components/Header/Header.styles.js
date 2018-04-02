import styled from 'styled-components';
import Link from 'gatsby-link';
import {
  HEADER_SHADOW,
  NAV_ANCHOR,
  TITLE_TEXT_COLOR,
} from '../../lib/theme/colours';

export const HeaderWrapper = styled.div`
  box-shadow: 0 2px 5px ${HEADER_SHADOW};
  min-height: 56px;
  transition: min-height 0.3s;
  width: 100%;
`;

export const HeaderInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

export const HeaderLogo = styled.img`
  border-radius: 50px;
  height: 72px;
  margin-bottom: 1em;
  margin-left: 1em;
  margin-right: 1em;
  margin-top: 1em;
  vertical-align: top;
`;

export const HeaderTitle = styled.h1`
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

export const StyledLink = styled(Link)`
  display: inline-block;
  color: ${NAV_ANCHOR};
  text-decoration: none;
  position: relative;
`;
