import React from 'react';
import '../Styles/Auth.css';
import logo from '../Images/logo.png';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../Images/Icon/Profile 1.svg';
import { ReactComponent as Logo1 } from '../Images/Icon/Lock 2.svg';
import { ReactComponent as Logo2 } from '../Images/Icon/Email.svg';

const SignUp = () => {
    const navigate = useNavigate();
    const SignUp = () => {

    };
    return (
        <div className='auth'>
            <div className='in'>
                <div className='left'>
                    <img className='logo' src={logo} alt='logo' />
                    <p>Please Fill The Required Details!</p>
                    <div className='input'>
                        <input type='text' placeholder='Full Name' />
                        <Logo />
                    </div>
                    <div className='input'>
                        <input type='text' placeholder='Email' />
                        <Logo2 />
                    </div>
                    <div className='input'>
                        <input type='text' placeholder='Password' />
                        <Logo1 />
                    </div>
                    <button onClick={SignUp}>
                        Sign Up
                    </button>
                    <p className='sign-up' onClick={() => { navigate('/') }}>Back to <span>Login</span></p>
                </div>
                <div className='right'>
                </div>
            </div>
        </div>
    )
}

export default SignUp;
