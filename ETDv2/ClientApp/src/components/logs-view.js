import * as React from 'react';
import ListItemETD from "./log-item";
import ListDescription from "./list-description";
import {useState, useEffect} from "react";

import { bindActionCreators } from 'redux';
//import the connect method that will connect your GameList component to redux.
import { connect } from 'react-redux';
//import your getGames action that will assign the response returned to your list in your initialState.
import { getLogs } from '../redux/reducer';
//import your GameList from rendering each individual game.
import LogItem from './log-item';
//import your PropTypes from prop-types to indicate what props will component can accept.
import PropTypes from 'prop-types';
import axios from 'axios';

const LogsView = ( {logs, history, actions} ) => {
    
    let [data, setData] = useState([]);
    const [error, setError] = React.useState(null);
    let [selected, setSelex] = useState({selected: null});
    
    useEffect(() => {
        axios.get(`http://localhost:44384/api/SourceInfos`, {
            headers : {
                mode: 'cors',
                credentials: 'include',
                type: 'application/json'
            }
        })
            .then(response => setData(response.data))
            .catch(error => setError(error));
    }, []);

    if (error) return `Error: ${error.message}`;
    
    // for (let i=0; i<data.length; i++)
    // {
    //     console.log(data[i].sourceInfoId);
    //     console.log(data[i].name);
    //     selected = data[i];
    // }
    
    const setSelected = (item) => {
        if(selected == null) {
            setSelex(data[data.length-1]);
        } else {
            setSelex(item);
        }
        console.log("clicked");
        console.log(selected.name);
    };

    
    
    return(
        <>
            <div className="main-log-view-page">
                <div className="main-logs-view">
                    {data.map(item => {
                        return <LogItem item={item} setSelected={setSelected} key={item.sourceInfoId} />
                    })
                    }
                </div>
                <ListDescription item={selected}/>
            </div>
        </>
        
    )
}

//Map your redux state to your props of your GameList component.
const mapStateToProps = state => {
    return {
        logs: state.logs
    };
}

//Map to your dispatchers to your props of your GameList component.
const mapDispatchToProps =  dispatch => {
    //Combine your actions to a new object, and then bind it to your dispatcher.
    const combinedActions = Object.assign({
        getLogs
    }, {});
    //Return your actions
    return {
        actions: bindActionCreators(combinedActions, dispatch)
    };
}

//Define the propTypes of your component, or the props you will be using.
LogsView.propTypes = {
    logs: PropTypes.array.isRequired,
    history: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
}

export default LogsView;