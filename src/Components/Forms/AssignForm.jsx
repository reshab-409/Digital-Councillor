import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { ReactComponent as Logo } from '../Images/Icon/Location.svg';
import { ReactComponent as Logo1 } from '../Images/Icon/Down Square 2.svg';
import DialogTitle from '@mui/material/DialogTitle';
import '../Styles/Dashboard.css';
import CloseIcon from '@mui/icons-material/Close';

const AssignForm = ({ isOpen, isClose }) => {
    return (
        <Dialog
            open={isOpen}
            onClose={isClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle sx={{ display: "flex", justifyContent: "space-between" }} id="alert-dialog-title" >
                {"Assign"}
                <CloseIcon onClick={isClose} sx={{ cursor: "pointer" }} fontSize='large' />
            </DialogTitle>
            <DialogContent>
                <div className='input'>
                    <Logo1 style={{ marginRight: "5px", marginLeft: "12px" }} />
                    <input className='formInput' type='text' placeholder='Ward no' />
                </div>
                <div className='input'>
                    <Logo style={{ marginRight: "5px", marginLeft: "12px" }} />
                    <input className='formInput' type='text' placeholder='Location' />
                </div>
                <div className='input'>
                    <Logo style={{ marginRight: "5px", marginLeft: "12px" }} />
                    <input className='formInput' type='text' placeholder='Nearest location' />
                </div>

                <div className='input'>
                    <textarea className='formInput' rows="3" cols="35" name="text" placeholder="description..."></textarea>
                </div>
            </DialogContent>
            <DialogActions sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <button className='create'>Assign</button>
            </DialogActions>
        </Dialog>

    )
}

export default AssignForm;
