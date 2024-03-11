import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Sidebar.css';

const Sidebar = () => {
    const navigate = useNavigate();
    return (
        <div className='main'>
            <div className="li">
                <li><button onClick={() => navigate("/")}>User List</button></li>
                <li><button onClick={() => navigate("/assign")}>Sardar</button></li>
                <li><button onClick={() => navigate("/pending-cases")}>Pending Cases</button></li>
                <li><button onClick={() => navigate("/complete-cases")}>Complete Cases</button></li>
            </div>
        </div>
    )
}

export default Sidebar;
