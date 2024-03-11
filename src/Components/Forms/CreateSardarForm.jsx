import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { ReactComponent as Logo } from '../Images/Icon/Profile 1.svg';
import { ReactComponent as Logo1 } from '../Images/Icon/Lock 2.svg';
import CloseIcon from '@mui/icons-material/Close';

const CreateSardarForm = ({ isOpen, isClose }) => {
    return (
        <Dialog
            open={isOpen}
            onClose={isClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle sx={{ display: "flex", justifyContent: "space-between" }} id="alert-dialog-title" >
                {"Create sardar"}
                <CloseIcon onClick={isClose} sx={{ cursor: "pointer" }} fontSize='large' />
            </DialogTitle>
            <DialogContent>
                <div className='input'>
                    <input className='formInput' type='text' placeholder='Login id' />
                    <Logo />
                </div>
                <div className='input'>
                    <input className='formInput' type='text' placeholder='Password' />
                    <Logo1 />
                </div>
            </DialogContent>
            <DialogActions>
                <button className='create'>Create</button>
            </DialogActions>
        </Dialog>

    )
}

export default CreateSardarForm;
