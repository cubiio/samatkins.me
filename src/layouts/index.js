import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Header from '../components/Header'
import '../styles/main.scss'

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {
    return (
      <div>
        <Helmet
          title="Sam Atkins: Portfolio & Blog"
          meta={[
            { name: 'description', content: 'portfolio and blog' },
            { name: 'keywords', content: 'portfolio, blog, web developer,
                                          javascript, python' },
          ]}
        />
        <Header />
        <div>
          {this.props.children()}
        </div>
      </div>
    )
  }
}
