import React from 'react';
import PropTypes from 'prop-types';
import * as Styles from './HeroText.styles';

const HeroText = ({ greeting, textBody }) => (
  <Styles.TextWrapper>
    <Styles.HeaderText>{greeting}</Styles.HeaderText>
    <Styles.BodyText>{textBody}</Styles.BodyText>
  </Styles.TextWrapper>
);

HeroText.propTypes = {
  greeting: PropTypes.string.isRequired,
  textBody: PropTypes.string.isRequired,
};

export default HeroText;
