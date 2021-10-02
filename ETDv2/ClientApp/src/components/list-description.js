import * as React from 'react';

import { connect } from 'react-redux';
//import withRouter to use history to redirect a user to the gamepage component.
import { withRouter } from 'react-router';
import { createBrowserHistory } from 'history';

const ListDescription = ({item}) => {
    
    return (
        <>
            <div className="list-description">
                <h4>Timestamp Start: {item.timestamp}</h4>
                <div className="agent-link">
                    <p>Logged by: {item.agent}</p>
                    <a href="{item.link}">Open Link</a>
                </div>
                <p className="description-box">Summary: {item.description}</p>
                <p>Timestamp End: {item.timestampEnd}</p>
                <div className="dropdown-items">
                    <p>TTP: {item.ttp}</p>
                    <p>TRA: {item.tra}</p>
                </div>
            </div>
        </>
    )
}

export default ListDescription;