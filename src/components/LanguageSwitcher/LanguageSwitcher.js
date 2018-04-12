import React from 'react';
import PropTypes from 'prop-types';

const LanguageSwitcher = ({ handleLanguageSwitch }) => {
  const handleChange = event => {
    handleLanguageSwitch({ language: event.target.id });
  };

  return (
    <div role="presentation">
      <div
        id="ENGLISH"
        onClick={event => handleChange(event)}
        onKeyUp={event => handleChange(event)}
        role="presentation"
      >
        EN
      </div>
      <div
        id="GERMAN"
        onClick={event => handleChange(event)}
        onKeyUp={event => handleChange(event)}
        role="presentation"
      >
        DE
      </div>
      <div
        id="POLISH"
        onClick={event => handleChange(event)}
        onKeyUp={event => handleChange(event)}
        role="presentation"
      >
        PL
      </div>
    </div>
  );
};

LanguageSwitcher.propTypes = {
  handleLanguageSwitch: PropTypes.func.isRequired,
};

export default LanguageSwitcher;
