import React from 'react';
import PropTypes from 'prop-types';
import * as Styles from './LanguageSwitcher.styles';
import { countryFlag } from '../../assets/images';

const LanguageSwitcher = ({ handleLanguageSwitch }) => {
  const handleClick = event => {
    handleLanguageSwitch({ language: event.target.id });
  };

  return (
    <Styles.StyledFlagWrapper role="presentation">
      <Styles.StyledFlag
        src={countryFlag.uk}
        alt="Flag of UK"
        id="ENGLISH"
        onClick={handleClick}
        onKeyUp={handleClick}
      />
      <Styles.StyledFlag
        src={countryFlag.germany}
        alt="Flag of Germany"
        id="GERMAN"
        onClick={handleClick}
        onKeyUp={handleClick}
      />
      <Styles.StyledFlag
        src={countryFlag.poland}
        alt="Flag of Poland"
        id="POLISH"
        onClick={handleClick}
        onKeyUp={handleClick}
      />
    </Styles.StyledFlagWrapper>
  );
};

LanguageSwitcher.propTypes = {
  handleLanguageSwitch: PropTypes.func.isRequired,
};

export default LanguageSwitcher;
