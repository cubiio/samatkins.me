import React from 'react';
import * as Styles from './Footer.styles';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Styles.FooterContainer>
      <Styles.FooterDiv>
        <p>
          Built with
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            React{' '}
          </a>
          and
          <a
            href="https://www.gatsbyjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            Gatsby
          </a>
          , deployed with
          <a
            href="https://www.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            Netlify
          </a>
          . © 2016-{currentYear} Sam Atkins
        </p>
      </Styles.FooterDiv>
    </Styles.FooterContainer>
  );
};

export default Footer;
