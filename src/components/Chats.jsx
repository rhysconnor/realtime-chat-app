import React from 'react'
import Tara from '../img/tara.jpg'
import Default from '../img/default.png'

function Chats() {
  return (
    <div className='Chats'>

<div className='userChat'>
      <img src={Tara} alt="" />
      <div className='userChatInfo'>
        <span> Tara </span>
        <p> hello </p>
      </div>
</div>
<div className='userChat'>
      <img src={Default} alt="" />
      <div className='userChatInfo'>
        <span> Shane </span>
        <p> hello </p>
      </div>
</div>
<div className='userChat'>
      <img src={Default} alt="" />
      <div className='userChatInfo'>
        <span> Dean </span>
        <p> hello </p>
      </div>
</div>
<div className='userChat'>
      <img src={Default} alt="" />
      <div className='userChatInfo'>
        <span> Tyler </span>
        <p> hello </p>
      </div>
</div>

    </div>
  )
}

export default Chats