import React from 'react'

function NavBar() {
  return (
    <div className='navbar'>
        <span className='logo'> Rhys' Chat </span>
        <div className='user'>
            <img src="logo" alt=""></img>
            <span> John </span>
            <button> Log out! </button>
        </div>

    </div>
  )
}

export default NavBar