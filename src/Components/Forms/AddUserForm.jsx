import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { ReactComponent as Logo } from '../Images/Icon/Location.svg';
import { ReactComponent as Logo1 } from '../Images/Icon/Down Square 2.svg';
import CloseIcon from '@mui/icons-material/Close';

const AddUserForm = ({ isOpen, isClose }) => {
    return (
        <Dialog
            open={isOpen}
            onClose={isClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle sx={{ display: "flex", justifyContent: "space-between" }} id="alert-dialog-title" >
                {"Add User"}
                <CloseIcon onClick={isClose} sx={{ cursor: "pointer" }} fontSize='large' />
            </DialogTitle>
            <DialogContent>
                <div className='input'>
                    <Logo1 style={{ marginRight: "8px" }} />
                    <input className='formInput' type='text' placeholder='Ward no' />
                </div>
                <div className='input'>
                    <Logo style={{ marginRight: "8px" }} />
                    <input className='formInput' type='text' placeholder='Location' />
                </div>
                <div className='input'>
                    <Logo style={{ marginRight: "8px" }} />
                    <input className='formInput' type='text' placeholder='Nearest location' />
                </div>
            </DialogContent>
            <DialogActions>
                <button className='create'>Create</button>
            </DialogActions>
        </Dialog>

    )
}

export default AddUserForm;
