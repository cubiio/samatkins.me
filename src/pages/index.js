import React from 'react'
import Helmet from 'react-helmet'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import SMIcons from '../components/SMIcons'
import Footer from '../components/Footer'

import '../styles/main.scss'

export default function Index () {
  return (
    <div>
      <Nav />
      <Hero />
      <SMIcons />
      <Footer />
    </div>
  )
}
