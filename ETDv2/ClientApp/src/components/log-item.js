import React, {useState} from 'react';
//import the connect from redux.
import { connect } from 'react-redux';
//import withRouter to use history to redirect a user to the logspage component.
import { withRouter } from 'react-router';
import { createBrowserHistory } from 'history';


const LogItem = ({item, setSelected}) => {
        
    return (
        // <div className='item-bar' key={DataEventRecordId} onClick={() => history.push(`logs/${DataEventRecordId}`)}>
        <div className='item-bar' key={item.dataEventRecordId} onClick={() => setSelected(item)}>
            
            
            <div className="item-bar-left">
                
                <h6 className="bar-timestamp">Timestamp Start: 
                    <h3>{item.timestamp}</h3>
                </h6>
            </div>

            <h5 className="bar-name">Title: {item.name}</h5>
            
            <p className="bar-updated">Id: {item.dataEventRecordId}</p>
        </div>
    );
};



export default withRouter(LogItem);