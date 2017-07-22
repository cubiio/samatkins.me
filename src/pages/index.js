import React from 'react'
import Helmet from 'react-helmet'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

import '../css/index.css'

export default function Index () {
  return (
    <div>
      <Nav />
      <Hero />
      <Footer />
    </div>
  )
}
