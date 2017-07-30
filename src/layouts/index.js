import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
const config = require('../../data/siteConfig')

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
          title={config.siteTitle}
          meta={[
            {
              name: 'description',
              content: config.metaDescription
            },
            {
              name: 'keywords',
              content: config.metaKeywords
            },
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
