import React, { Component } from 'react'
import Link from 'gatsby-link'
import images from '../../assets/images'

class Header extends Component {
  render () {
    return (
      <div className='header'>
        <div className='header-inner'>
          <div>
            <Link to='/'>
              <img className='header-logo' src={images.logo.header} alt='Logo image - avatar of the author'
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
