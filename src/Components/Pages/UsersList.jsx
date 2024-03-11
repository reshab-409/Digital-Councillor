import React from 'react';
import '../Styles/Dashboard.css';
import Data from '../DummyData/UserData';
import AddWardForm from '../Forms/AddUserForm';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../Images/Icon/UserLftIcn.svg';
import { ReactComponent as Logo1 } from '../Images/Icon/Location2.svg';
import { ReactComponent as Logo2 } from '../Images/Icon/Create.svg';

const Users = () => {
    const [open, setOpen] = React.useState(false);

    const addward = () => {
        setOpen(true);
    };

    const close = () => {
        setOpen(false);
    };
    return (
        <div className='dashboard'>
            {/* popup for create ward */}
            <AddWardForm
                isOpen={open}
                isClose={close}
            />

            <div className='in'>
                <div className='wardHead'>
                    <p>Users</p>
                    <button onClick={addward}>
                        <Logo2 />
                        Create User
                    </button>
                </div>
                <div className='wardList'>
                    {Data.map((data, index) => (
                        <Link key={index} style={{ textDecoration: 'none' }} to={`/all-cases/${data.UserNo}`}>
                            <div className="box" >
                                <div className='line1'>
                                    <Logo className='svg' />
                                    <small>{data.UserName.slice(0, 13)}..</small>
                                </div>
                                <div className='line2'>
                                    <Logo1 />
                                    <p>{data.Location.slice(0, 16)}...</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Users;