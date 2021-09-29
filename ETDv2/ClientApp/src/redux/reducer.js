const initialState = {
    list: [],
    currentGame: {},
    createGameForm: {}
}

//Define the actionType that is getting data.
const ASSIGN_LIST = 'ASSIGN_LIST';
//Define a actionType for changes in the createGame form
const CHANGE_CREATE_LOG_FORM = 'CHANGE_CREATE_LOG_FORM';
//Define a actionType for resetting your createGame form after your game is successfully created.
const LOG_CREATED = 'LOG_CREATED';
//Define a actionType for getting a specific game.
const ASSIGN_CURRENT_LOG = 'ASSIGN_CURRENT_LOG';
//Define a actionType for when we are directed out of the currentGame page.
const RESET_CURRENT_LOG = 'RESET_CURRENT_LOG';

//Define your reducer which would be responsible for changing your initialState.
const reducer = (state=initialState, action) => {
    //Based on the action type manipulate your state.
    switch(action.type) {
        case ASSIGN_LIST:
            //Treat data as immutable, which means return a new object.
            return Object.assign({}, state, {
                list: action.logs
            });
        case ASSIGN_CURRENT_LOG:
            //Now assign your currentGame to your currentGame state.
            return Object.assign({}, state, {
                currentLog: action.log
            });
        case RESET_CURRENT_LOG:
            //When your currentGame is directed to different page will reset your currentGame to initialSTate.
            return Object.assign({}, state, {
                currentLog: initialState.currentLog
            });
        case CHANGE_CREATE_LOG_FORM:
            //Now assign your form to your createGameForm initialState.
            return Object.assign({}, state, {
                createLogForm: action.form
            });
        case LOG_CREATED:
            //Now assign your form to your initialState.
            return Object.assign({}, state, {
                createLogForm: initialState.createLogForm,
                currentLog: action.log
            });
        //By default return the state.
        default:
            return state;
    }
}

//Define your action that will responsible for returning a type 
export const getLogs = logs => {
    return {
        type: ASSIGN_LIST,
        logs
    }
}

//Define an action that will assign your game to your currentGame initialState.
export const getLog = log => {
    return {
        type: ASSIGN_CURRENT_LOG,
        log
    }
}

//Define an action that will reset the currentGame in initialState when directed out of currentGame page.
export const resetLog = () => {
    return {
        type: RESET_CURRENT_LOG
    }
}

//Define your action that will be responsible for handling changes in your createGameForm 
export const changeCreateLog = form => {
    return {
        type: CHANGE_CREATE_LOG_FORM,
        form
    }
}

//Define an action that will be responsible for resetting your createGameForm when game is created.
export const logCreated = log => {
    return {
        type: LOG_CREATED,
        log
    }
}

//Now export your reducer.
export default reducer;