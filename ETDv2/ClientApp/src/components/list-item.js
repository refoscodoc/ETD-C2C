import * as React from 'react';

import { useState } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getLog , resetLog} from '../redux/reducer';

const ListItemETD = () => {
    // const [mounted, setMounted] = useState(false);
    //
    // if(!mounted) {
    //     fetch(new Request(`https://localhost:3000/api/logs/${this.props.match.params.uuid}`, {
    //         method: 'GET',
    //         type: 'application/json',
    //         mode: 'cors'
    //     }))
    //         //Have your response be converted to json
    //         .then(res => res.json())
    //         //Then set your global state currentGame to the gameReturned from the response.
    //         .then(gameReturned => this.props.actions.getLog(logReturned))
    //         //Catch errors, and log into the console.
    //         .catch(err => console.log("Get Log Error---------", err))
    // }

    // useEffect(() =>{
    //     // This is similar to componentDidMount
    //     // Call back-end api here
    // },[]);

    
        //Destruct the game from the props.
        const { log } = this.props;
        return (
            <div>
                <h2>{log.title}</h2>
                <h2>Summary: {log.summary}</h2>
                <h2>Timestamp Start: {log.timestamp}</h2>
                <h2>Link: {log.link}</h2>
            </div>
        );
    
}

//Map your getGame action or dispatch to your this.props which would be used to set your currentGame state to the argument passed to action.
const mapDispatchToProps = dispatch => {
    //Create a new object and pass it to your bind action creators to bind your actions to your dispatcher.
    const combinedActions = Object.assign({
        getLog,
        resetLog
    }, {});
    //Then return your actions.
    return {
        actions: bindActionCreators(combinedActions, dispatch)
    };
}

//Will map the currentGame state to your this.props.game since it is the object returned from the function.
//Will be used to display data from your redux state.
const mapStateToProps = state => {
    return {
        log: state.currentLog
    }
}

export default ListItemETD;