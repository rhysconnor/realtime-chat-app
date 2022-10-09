import React from 'react'
import Tara from "../img/tara.jpg"


function Search() {
  return (
    <div className='search'>
    <div className='searchForm'>
      <input type="text" placeholder=' Find a user ' />
    </div>

    <div className='userChat'>
      <img src={Tara} alt="" />
      <div className='userChatInfo'>
        <span> Tara </span>
      </div>
    </div>
  </div>
  )
}

export default Search