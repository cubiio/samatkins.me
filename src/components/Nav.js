import React, { Component } from 'react'
import Link from 'gatsby-link'

// /TODO remove <li>
class Nav extends Component {
  render () {
    return (
      <nav className='nav'>
        <ul className='nav-list'>
          <li className='nav-item'>
            <Link className='nav-anchor' to='/'>Home</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-anchor' to='/'>Portfolio</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-anchor' to='/blog'>Blog</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Nav
