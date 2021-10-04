import React, {useState} from 'react';
import {Button} from "@material-ui/core";
import axios from "axios";

const DeleteWarning = ({deleteState, changeDeleteBool, item}) => {
    async function deleteObject () {
        
        console.log(item.dataEventRecordId);
        let res = await axios.delete(`http://localhost:44384/api/DataEventRecords/${item.dataEventRecordId}`)
            .then(response => {
            console.log(response);
        });
    }
    
    const onClickMultiple = () => {
        deleteObject();
        changeDeleteBool();
    }
    
    return (
        <div className="delete-box" style={{ display: (deleteState ? 'flex' : 'none') }}>
            <p>Are you sure you want to delete the log forever?</p>
            <Button onClick={changeDeleteBool}>No</Button>
            <Button onClick={onClickMultiple}>yes</Button>
        </div>
    )
}

export default DeleteWarning;