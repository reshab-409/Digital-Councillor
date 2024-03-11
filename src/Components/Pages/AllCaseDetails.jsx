import React from 'react';
import '../Styles/AddAdvertisement.css';
import Data2 from '../DummyData/SpecificUserAllCase';
import logo from '../Images/logo.png';
import { useParams } from 'react-router-dom';

const Cases = () => {
    const { userNo } = useParams();
    console.log(userNo);
    return (
        <div className='advertisement'>
            <div className='in'>
                <p className='title2'>All Cases</p>
                {Data2.map((data, index) => (
                    <div key={index}>
                        <div className='addCard' style={{ border: `${data.active ? "5px solid #40E4A9" : "5px solid #F95353"}`, background: `${data.active ? "rgba(64, 228, 169, 0.05)" : "rgba(249, 83, 83, 0.05)"}` }}>
                            <div className='leftSec'>
                                <img src={data.img} alt="img" />
                                <p>Case code: {data.AssemblyCode}</p>
                            </div>
                            <div className='detailes'>
                                <p><small>ward no : </small>{data.wardNo}</p>
                                <p><small>address : </small>{data.address}</p>
                                <p><small>latitude : </small>{data.latitude}</p>
                                <p><small>longitude : </small>{data.longitude}</p>
                            </div>
                            <div className='logo'>
                                <img src={logo} alt='logo' />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cases;
