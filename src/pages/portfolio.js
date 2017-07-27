import React from 'react'
import Nav from '../components/Nav'
import Portfolio from '../components/Portfolio'
import SMIcons from '../components/SMIcons'
import Footer from '../components/Footer'

import '../styles/main.scss'

export default function Index () {
  return (
    <div>
      <Nav />
      <Portfolio />
      <SMIcons />
      <Footer />
    </div>
  )
}
