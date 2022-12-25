import React from 'react'
import { AiFillHome } from 'react-icons/ai';
import { MdPersonAddAlt1 } from 'react-icons/md';
import { RiLoginBoxFill } from 'react-icons/ri';
import { FaUser } from 'react-icons/fa';

import "./Navbar.css"

function Navbar(props) {
  const {userId } = props;
  return (
    <div className='container'>
      <a href="/" >
        <div className='a'><AiFillHome size={30}/>Home</div>
      </a><br />
      <a href="/signup" >
        <div className='a'><MdPersonAddAlt1 size={30}/>Signup</div>
      </a><br />
      <a href="/login" >
        <div className='a'><RiLoginBoxFill size={30}/>Login</div>
      </a><br />
      <a href={'/users/' + userId}>
        <div  className='a'><FaUser size={30}/>User</div>
      </a>
    </div>
  )
}

export default Navbar