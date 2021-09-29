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
                <h3 className="description-box">Summary: {item.description}</h3>
            </div>
        </>
    )
}

export default ListDescription;