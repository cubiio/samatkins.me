import React, { Component } from 'react';
import HeroText from '../HeroText';
import LanguageSwitcher from '../LanguageSwitcher';
import * as text from './heroTextLanguages';

class HeroTextSwitcher extends Component {
  constructor(props) {
    super(props);
    this.handleLanguageSwitch = this.handleLanguageSwitch.bind(this);
    this.state = {
      language: 'GERMAN',
    };
  }

  handleLanguageSwitch(language) {
    this.setState({
      language,
    });
  }

  render() {
    const { language } = this.state.language;
    const switchLanguage = () => {
      switch (language) {
        case 'GERMAN':
          return (
            <HeroText
              greeting={text.heroTextGerman.greeting}
              textBody={text.heroTextGerman.textBody}
            />
          );
        case 'POLISH':
          return (
            <HeroText
              greeting={text.heroTextPolish.greeting}
              textBody={text.heroTextPolish.textBody}
            />
          );
        default:
          return (
            <HeroText
              greeting={text.heroTextEnglish.greeting}
              textBody={text.heroTextEnglish.textBody}
            />
          );
      }
    };
    return (
      <div>
        <LanguageSwitcher handleLanguageSwitch={this.handleLanguageSwitch} />
        {switchLanguage()}
      </div>
    );
  }
}

export default HeroTextSwitcher;
