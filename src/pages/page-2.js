import React from 'react'
import Link from 'gatsby-link'
import Nav from '../layouts/Nav'
import Footer from '../layouts/Footer'
// import Helmet from 'react-helmet'

export default class Page2 extends React.Component {
  render () {
    return (
      <div>
        <Nav />
        <h1>Hi people</h1>
        <p>Welcome to page 2</p>
        <Link to='/'>Go back to the homepage</Link>
        <Footer />
      </div>
    )
  }
}
