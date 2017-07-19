import React from 'react'
import Link from 'gatsby-link'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
// import Helmet from 'react-helmet'

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Nav />
        <Hero />
        <Link to='/page-2/'>Go to page 2</Link>
        <Footer />
      </div>
    )
  }
}
