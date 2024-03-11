import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';

const SardarDetails = ({ isOpen, isClose, data }) => {
    return (
        <Dialog
            open={isOpen}
            onClose={isClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle sx={{ display: "flex", justifyContent: "space-between" }} id="alert-dialog-title" >
                {"Sardar Details"}
                <CloseIcon onClick={isClose} sx={{ cursor: "pointer" }} fontSize='large' />
            </DialogTitle>
            <DialogContent>
                <div className="details">
                    <h1>{data.name}</h1>
                    <p>{data.phone}</p>
                </div>
            </DialogContent>
        </Dialog>

    )
}

export default SardarDetails;
