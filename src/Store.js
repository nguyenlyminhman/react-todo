import { NoteData } from './FirebaseConfig';
const redux = require('redux');

const noteInitialState = {
    testNote: 'Test Note'
};

function allReducer(state = noteInitialState, action) {
    switch (action.type) {
        case "ADD_NOTE":
            NoteData.push(action.item);
            return state;
        default:
            return state;
    }
}

let store = redux.createStore(allReducer);
export default store;