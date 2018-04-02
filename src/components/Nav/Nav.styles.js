import styled from 'styled-components';
import Link from 'gatsby-link';
import { NAV_ANCHOR } from '../../lib/theme/colours';

export const NavWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 60%;

  @media (max-width: 700px) {
    width: 95%;
  }
`;

export const NavAnchor = styled(Link)`
  color: ${NAV_ANCHOR};
  text-decoration: none;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: flex-start;
  margin: 0;
  max-width: 100%;
  padding: 0;
`;

export const NavItem = styled.li`
  box-sizing: border-box;
  display: flex;
  display: inline-block;
  flex: 1;
  line-height: 24px;
  padding: 10px;
  text-align: center;
  text-transform: uppercase;
  width: 20%;
`;
