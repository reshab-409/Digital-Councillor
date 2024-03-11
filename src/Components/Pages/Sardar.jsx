import React from 'react';
import '../Styles/Dashboard.css';
import Data2 from '../DummyData/SardarsList';
import AssignForm from '../Forms/AssignForm';
import { ReactComponent as Logo } from '../Images/Icon/Profile.svg';
import { ReactComponent as Logo1 } from '../Images/Icon/Details.svg';
import { ReactComponent as Logo2 } from '../Images/Icon/Create.svg';
import CreateSardarForm from '../Forms/CreateSardarForm';
import { useNavigate } from 'react-router-dom';
import SardarDetails from '../Forms/SardarPopupDetails';

const Sardar = () => {
    const navigate = useNavigate();
    // Popup1
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

    // Sardar data
    const [SardarData, setSardarData] = React.useState({});

    const assign = () => {
        setOpen(true);
    };
    const assign1 = (data) => {
        if (data && data.id) {
            navigate(`/all-cases/${data.id}`);
        }
    };

    const createAdmin = () => {
        setOpen1(true);
    };
    const close = () => {
        setOpen(false);
        setOpen1(false);
        setOpen2(false);
    };

    const SardarDetailsFunc = (data) => {
        setOpen2(true);
        setSardarData(data);
    };
    return (
        <div className='dashboard'>
            <AssignForm
                isOpen={open}
                isClose={close}
            />

            <CreateSardarForm
                isOpen={open1}
                isClose={close}
            />

            <SardarDetails
                isOpen={open2}
                isClose={close}
                data={SardarData || {}}
            />

            <div className='in'>
                <div className='assign'>
                    <p>Assign work to a particular Sardar</p>
                    <div className='btns'>
                        <button onClick={assign}>
                            <Logo2 />
                            Assign to
                        </button>
                        <button onClick={createAdmin}>
                            <Logo2 />
                            Create Sardar
                        </button>
                    </div>
                </div>

                <div className='wardAssign'>
                    {Data2.map((data, index) => (
                        <div key={index} className='admins'>
                            <Logo onClick={() => SardarDetailsFunc(data)} className='svg' />
                            <div className='name'>
                                <p>{data.name?.slice(0, 15) + '..'}</p>
                                <small>{data.phone}</small>
                            </div>
                            <Logo1 onClick={() => assign1(data)} className='pointer' />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sardar;
