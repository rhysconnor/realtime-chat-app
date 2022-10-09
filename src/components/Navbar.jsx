import React from 'react'
import Tara from "../img/tara.jpg"


function NavBar() {
  return (
    <div className='navbar'>
        <span className='logo'> Chatroom </span>
        <div className='user'>
            <img src={Tara} alt=""></img>
            <span> Tara </span>
            <button> Log out! </button>
        </div>

    </div>
  )
}

export default NavBar