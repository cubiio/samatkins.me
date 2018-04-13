import React from 'react';
import PropTypes from 'prop-types';
import * as Styles from './HeroText.styles';

const HeroText = ({ greeting, textBody }) => (
  <Styles.TextWrapper>
    <h2>{greeting}</h2>
    <p>{textBody}</p>
  </Styles.TextWrapper>
);

HeroText.propTypes = {
  greeting: PropTypes.string.isRequired,
  textBody: PropTypes.string.isRequired,
};

export default HeroText;
