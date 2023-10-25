import React from 'react'

const LoginSignup = () => {
  return (
    <div className='loginSignup'>
      <div className="loginSignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='Your Email'/>
          <input type='password' placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className='loginSignup-login'>Already have an account? <span>Login here</span></p>
      </div>
    </div>
  )
}

export default LoginSignup
