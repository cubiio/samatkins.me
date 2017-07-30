import React from 'react'
import images from '../../assets/images'

const SMIcons = () => {
  return (
    <div className='social-container'>
      <div className='social-logo'>
        <a href='https://github.com/cubiio' target='_blank'>
          <img src={images.fa.github} />
        </a>
      </div>
      <div className='social-logo'>
        <a href='https://www.linkedin.com/in/atkinssam/' target='_blank'>
          <img src={images.fa.linkedin} />
        </a>
      </div>
      <div className='social-logo'>
        <a href='https://twitter.com/cubiio' target='_blank'>
          <img src={images.fa.twitter} />
        </a>
      </div>
    </div>
  )
}

export default SMIcons
