import React, {useEffect, useState} from "react";
import { Slide, CircularProgress, Backdrop, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@material-ui/core";
import axios from "axios";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Settings = () => {
    

    async function deleteFunction() {
        
        await axios.get(`http://localhost:44384/api/DataEventRecords/resync`);
          
    }
    
    
    
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [openBackdrop, setBackdropOpen] = React.useState(false);
    const handleBackdropClose = () => {
        setBackdropOpen(false);
    };
    const handleBackdropToggle = () => {
        setBackdropOpen(!open);
    };
    
    return(
        <>
            <div className="settings-main">
                <Button variant="outlined" onClick={handleClickOpen}>
                    Delete databases and reimport all the data
                </Button>
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle>{"Are you sure you want to re-sync the whole DB's table?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            By clicking Yes you will reload all the entries present in the Spreadheet file into the SQLite database.
                            Please note that this doesn't delete the entries already present in it. For deleting those you should manually launch
                            "delete from DataEventsRecors" and "delete from SourceInfos" from a SQLite terminal or from a dedicated program.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Disagree</Button>
                        <Button onClick={() => {handleClose(); deleteFunction(); handleBackdropToggle();}}>Agree</Button>
                        <Backdrop
                            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                            open={open}
                            onClick={handleBackdropClose}>
                            <CircularProgress color="inherit" />
                        </Backdrop>
                    </DialogActions>
                </Dialog>
            </div>
        </>
    )
}

export default Settings;