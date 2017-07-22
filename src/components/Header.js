import React, { Component } from 'react'
import Link from 'gatsby-link'

class Header extends Component {
  render () {
    return (
      <div>
        <div
          style={{
            background: `rebeccapurple`,
            marginBottom: `1.45rem`
          }}
        >
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `1rem 0.75rem`
            }}
          >
            <h1 style={{ margin: 0, fontSize: `2rem` }}>
              <Link
                to='/'
                style={{
                  color: 'white',
                  textDecoration: 'none'
                }}
              >
                Sam Atkins: Web Developer
              </Link>
            </h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
