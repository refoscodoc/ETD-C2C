import React, {useState} from 'react';
//import your connect from redux.
import { connect } from 'react-redux';
//import withRouter to use history to redirect a user to the gamepage component.
import { withRouter } from 'react-router';
import { createBrowserHistory } from 'history';

const LogItem = ({item, setSelected}) => {
        
    return (
        // <div className='item-bar' key={DataEventRecordId} onClick={() => history.push(`logs/${DataEventRecordId}`)}>
        <div className='item-bar' key={item.sourceInfoId} onClick={() => setSelected(item)}>
            <h3 className="bar-name">Title: {item.name}</h3>
            <h4 className="bar-description">Summary: {item.description}</h4>
            <h4 className="bar-timestamp">Timestamp Start: {item.timestamp}</h4>
            <p className="bar-updated">Id: {item.sourceInfoId}</p>
        </div>
    );
};



export default withRouter(LogItem);