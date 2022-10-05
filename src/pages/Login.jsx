import React from 'react'

function Login() {
  return (
    <div className='formContainer'>
          <div className='formWrapper'>
            <span className='logo'> Rhys' Chat </span>
            <span className='title'> Login </span>
            <form>
              <input type="email" placeholder='Email'/>
              <input type="password" placeholder='Password'/>
              <input style={{display:"none"}} type="file" id="file"/>
              <button> Sign In</button>
            </form>
        
            <p> You dont have an account? Register! </p>
          </div>
    </div>
  )
}

export default Login