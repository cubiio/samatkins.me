import React from 'react';
import * as Styles from './Nav.styles';

const Nav = () => (
  <Styles.NavWrapper>
    <Styles.NavList>
      <Styles.NavItem>
        <Styles.NavAnchor to="/">Home</Styles.NavAnchor>
      </Styles.NavItem>
      <Styles.NavItem>
        <Styles.NavAnchor to="/portfolio">Portfolio</Styles.NavAnchor>
      </Styles.NavItem>
      <Styles.NavItem>
        <Styles.NavAnchor to="/blog">Blog</Styles.NavAnchor>
      </Styles.NavItem>
    </Styles.NavList>
  </Styles.NavWrapper>
);

export default Nav;
