import React, { Component } from 'react'
import Link from 'gatsby-link'

class Nav extends Component {
  render () {
    return (
      <div>
        <Link to='/'>Home</Link>
        <Link to='/page-2/'>Page 2</Link>
        <Link to='/'>Portfolio</Link>
        <Link to='/'>Blog</Link>
      </div>
    )
  }
}

export default Nav
