import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';


const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
    width: 60,
    height: 32,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(29px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.mode === 'dark' ? '#40E4A9' : '#40E4A9',
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color:
                theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[600],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 27,
        height: 28,
    },
    '& .MuiSwitch-track': {
        borderRadius: 31 / 2,
        backgroundColor: theme.palette.mode === 'light' ? '#F95353' : '#F95353',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
}));

const ToggleButton = ({ data }) => {
    const [checked, setChecked] = useState();

    const handleChange = (event) => {
        setChecked({
            ...checked,
            [event.target.name]: event.target.checked,
        });
    };
    return (
        <div className='editicn'>
            <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked={data.complete} onChange={handleChange} />}
            />
        </div>
    );
};

export default ToggleButton;
