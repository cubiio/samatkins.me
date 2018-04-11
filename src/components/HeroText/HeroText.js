import React from 'react';
import PropTypes from 'prop-types';

const HeroText = ({ greeting, textBody }) => (
  <div>
    <h2>{greeting}</h2>
    <p>{textBody}</p>
  </div>
);

HeroText.propTypes = {
  greeting: PropTypes.string.isRequired,
  textBody: PropTypes.string.isRequired,
};

export default HeroText;
