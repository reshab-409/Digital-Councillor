import React, { useState } from 'react';
import logo from '../Images/logo.png';
import '../Styles/Header.css';
import Badge from '@mui/material/Badge';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { ReactComponent as Logo } from '../Images/Icon/Cross.svg';
import { useNavigate } from 'react-router-dom';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const Header = () => {
    const [menu, setMenu] = useState("headerAccountSec");
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [blur, setBlur] = useState("none");
    const navigate = useNavigate();
    const home = () => {
        navigate("/");
    };
    const showNav = () => {
        setMenu('headerAccountSec activeNavbar');
        setBlur('blur');
        setIsButtonClicked(!isButtonClicked);
    };
    const closeNav = () => {
        setMenu('headerAccountSec');
        setBlur('none');
        setIsButtonClicked(!isButtonClicked);
    };
    const logout = () => {
        window.localStorage.setItem('login', false);
        navigate('/');
        window.location.reload();
    };
    return (
        <header>
            <style>
                {`
                    body {
                        overflow: ${isButtonClicked ? 'hidden' : 'auto'};
                    }
                 `}
            </style>

            <div className='header'>
                <img src={logo} onClick={home} alt='logo' className='logo' />
                <div className={menu}>
                    <div className='search'>
                        <button>
                            Search
                            <Logo />
                        </button>
                        <input type='text' />
                    </div>

                    <div className='NA'>
                        <div className='notification'>
                            <Badge sx={{ cursor: "pointer" }} color="primary" badgeContent={9}>
                                <NotificationsNoneOutlinedIcon />
                            </Badge>
                            <LogoutIcon className='logout' onClick={logout} sx={{ cursor: "pointer" }} />
                        </div>
                        <div className='account'>
                            <span>R</span>
                            <div className='AD'>
                                <p>admin</p>
                                <small> reshab123@gmail.com  </small>
                            </div>
                        </div>


                        <div className="navigator">
                            <div className="li">
                                <li onClick={() => { navigate("/"); closeNav(); }}>User List</li>
                                <li onClick={() => { navigate("/assign"); closeNav(); }}>Sardar</li>
                                <li onClick={() => { navigate("/pending-cases"); closeNav(); }}>Pending Cases</li>
                                <li onClick={() => { navigate("/complete-cases"); closeNav(); }}>Complete Cases</li>
                            </div>
                        </div>
                    </div>
                    <div onClick={closeNav} className='closeNavbar'>
                        <CloseOutlinedIcon className='icon' />
                    </div>
                </div>

                <div className='toddleNavbar'>
                    <LogoutIcon onClick={logout} sx={{ cursor: "pointer" }} />
                    <MenuOutlinedIcon onClick={showNav} className="icon" />
                </div>
            </div>
            <div className={blur}>
            </div>
        </header>
    )
}

export default Header;
