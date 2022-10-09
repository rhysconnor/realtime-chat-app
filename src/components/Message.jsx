import React from 'react'
import Tara from '../img/tara.jpg'

function Message() {
  return (
    <div className='message owner'>
            <div className='messageInfo'>
                <img src={Tara} alt=""/>
                <span> Just now </span>
            </div>
            <div className='messageContent'> 
             <p> Hello </p>
             <img src={Tara} alt=""/>
            </div>
    </div>


  )
}

export default Message