import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { useState } from 'react';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();
  }

  const register = e => {
    e.preventDefault();
  }

  return (
    <div className="login">
      <Link to="/">
        <img 
          className="login__logo"
          alt="Amazon home"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />
      </Link>

      <div class="login__container">
        <h1>Sign In</h1>

        <form>
          <h5>Email</h5>
          <input type="text" value={email} onChange={ e => setEmail(e.target.value) } />
          <h5>Password</h5>
          <input type="text" value={password} onChange={ e => setPassword(e.target.value) } />

          <button type="submit" onClick={signIn}>Sign In</button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>

        <button className='login__registerButton' onClick={register}>Create your Amazon Account</button>
      </div>
    </div>
  )
}

export default Login
