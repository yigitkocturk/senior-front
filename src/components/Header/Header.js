import React from 'react'
import "./Header.css"


function Header() {
  return (
    <div>
        <div className='name'>
        <img src={require('../logo.jpeg')} alt='' />
        <p className='name2'>SHARE CIRCLE</p>
      </div>
    </div>
  )
}

export default Header