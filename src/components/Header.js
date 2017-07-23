import React, { Component } from 'react'
import Link from 'gatsby-link'
import logo from '../assets/images/logo.svg'

class Header extends Component {
  render () {
    return (
      <div className='header'>
        <div className='header-inner'>
          <div>
            <Link to='/'>
              <img className='header-logo' src={logo} alt='Logo image - avatar of the author'
              />
            </Link>
            <h1 className='header-title'>
              <Link
                to='/'
              >
                Sam Atkins: Full Stack Web Developer
              </Link>
            </h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
