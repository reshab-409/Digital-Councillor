import React from 'react';
import '../Styles/Auth.css';
import logo from '../Images/logo.png';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../Images/Icon/Profile 1.svg';
import { ReactComponent as Logo1 } from '../Images/Icon/Lock 2.svg';

const Login = () => {
  const navigate = useNavigate();
  const login = () => {
    window.localStorage.setItem('login', true);
    window.location.reload();
  };

  return (
    <div className='auth'>
      <div className='in'>
        <div className='left'>
          <img className='logo' src={logo} alt='logo' />
          <p>Welcome Back!</p>
          <div className='input'>
            <input type='text' placeholder='Login id' />
            <Logo />
          </div>

          <div className='input'>
            <input type='text' placeholder='Password' />
           <Logo1/>
          </div>
          <button onClick={login}>
            Login
          </button>
          <p className='sign-up' onClick={() => { navigate('/signup') }}>Don't have account? <span>Sign up</span></p>
        </div>
        <div className='right'>
        </div>
      </div>
    </div>
  )
}

export default Login;
