import React from 'react';
import PropTypes from 'prop-types';
import * as Styles from './LanguageSwitcher.styles';
import { countryFlag } from '../../assets/images';

const LanguageSwitcher = ({ handleLanguageSwitch }) => {
  const handleChange = event => {
    handleLanguageSwitch({ language: event.target.id });
  };

  return (
    <Styles.StyledFlagWrapper role="presentation">
      <Styles.StyledFlag
        src={countryFlag.uk}
        alt="Flag of UK"
        id="ENGLISH"
        onClick={event => handleChange(event)}
        onKeyUp={event => handleChange(event)}
      />
      <Styles.StyledFlag
        src={countryFlag.germany}
        alt="Flag of Germany"
        id="GERMAN"
        onClick={event => handleChange(event)}
        onKeyUp={event => handleChange(event)}
      />
      <Styles.StyledFlag
        src={countryFlag.poland}
        alt="Flag of Poland"
        id="POLISH"
        onClick={event => handleChange(event)}
        onKeyUp={event => handleChange(event)}
      />
    </Styles.StyledFlagWrapper>
  );
};

LanguageSwitcher.propTypes = {
  handleLanguageSwitch: PropTypes.func.isRequired,
};

export default LanguageSwitcher;
