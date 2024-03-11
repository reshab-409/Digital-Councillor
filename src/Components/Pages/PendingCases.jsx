import React from 'react';
import '../Styles/RegisteredAgency.css';
import Data from '../DummyData/UsercaseData';
import { ReactComponent as Logo } from '../Images/Icon/Vector.svg';
import { useNavigate } from 'react-router-dom';
import ToggleButton from '../Main_Components/ToggleButton';

const PendingCases = () => {
    const navigate = useNavigate();
    return (
        <div className='adds'>
            <div className='in'>
                <div className='upr12'>
                    <p className='addsHeader'>Pending Cases</p>
                </div>

                <div className='container'>
                    {Data.filter(data => !data.complete).map((data, index) => (
                        <div className='add' style={{ background: "rgba(253, 85, 85, 0.15)" }} key={index}>
                            <div className='checked'>
                                <p class="material-symbols-outlined">
                                    delete
                                </p>
                                <ToggleButton data={data} />
                            </div>

                            <div className='box' onClick={() => { navigate(`/all-cases/${data.UserNo}`) }}>
                                <Logo className='docIcn' />
                                <div className='inBox'>
                                    <small>User name</small>
                                    <p>{data.userName}</p>
                                </div>
                            </div>

                            <div className='box' onClick={() => { navigate(`/all-cases/${data.UserNo}`) }}>
                                <Logo className='docIcn' />
                                <div className='inBox'>
                                    <small>Location</small>
                                    <p>{data.location}</p>
                                </div>
                            </div>

                            <div className='box' onClick={() => { navigate(`/all-cases/${data.UserNo}`) }}>
                                <Logo className='docIcn' />
                                <div className='inBox'>
                                    <small>Pending Case</small>
                                    <p>{data.pendingCase}</p>
                                </div>
                            </div>

                            <div className='box' onClick={() => { navigate(`/all-cases/${data.UserNo}`) }}>
                                <Logo className='docIcn' />
                                <div className='inBox'>
                                    <small>Complete Case</small>
                                    <p>{data.completeCase}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default PendingCases;