import React from 'react'
import gh from '../assets/fa/github-square.svg'
import linkedin from '../assets/fa/linkedin.svg'
import twitter from '../assets/fa/twitter-square.svg'

const SMIcons = () => {
  return (
    <div className='social-container'>
      <div className='social-logo'>
        <a href='https://github.com/cubiio' target='_blank'>
          <img src={gh} />
        </a>
      </div>
      <div className='social-logo'>
        <a href='https://www.linkedin.com/in/atkinssam/' target='_blank'>
          <img src={linkedin} />
        </a>
      </div>
      <div className='social-logo'>
        <a href='https://twitter.com/cubiio' target='_blank'>
          <img src={twitter} />
        </a>
      </div>
    </div>
  )
}

export default SMIcons
