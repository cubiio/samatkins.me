import React from 'react';
import PropTypes from 'prop-types';

const LanguageSwitcher = ({ handleLanguageSwitch }) => {
  const handleChange = e => {
    handleLanguageSwitch({ language: e.target.id });
  };

  return (
    <div role="presentation">
      <div
        id="ENGLISH"
        onClick={e => handleChange(e)}
        onKeyUp={handleChange}
        role="presentation"
      >
        EN
      </div>
      <div
        id="GERMAN"
        onClick={e => handleChange(e)}
        onKeyUp={handleChange}
        role="presentation"
      >
        DE
      </div>
      <div
        id="POLISH"
        onClick={e => handleChange(e)}
        onKeyUp={handleChange}
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
