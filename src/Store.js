import { NoteData } from './FirebaseConfig';
const redux = require('redux');

const noteInitialState = {
    isEdit: true,
    editItem: {}
};

function allReducer(state = noteInitialState, action) {
    switch (action.type) {
        case "ADD_NOTE":
            NoteData.push(action.item);
            return state;
        case "EDIT_NOTE":
            if (state.isEdit)
                return { ...state, isEdit: state.isEdit }
            return { ...state, isEdit: !state.isEdit }
        case "CANCEL_ADD_NOTE":
            return { ...state, isEdit: !state.isEdit }
        case "GET_EDIT_NOTE":
            return { ...state, editItem: action.objEdit }
        case "EDITED_NOTE":
            NoteData.child(action.item.id).update({
                title: action.item.title,
                content: action.item.content
            })
            return { ...state, editItem: action.item }
        default:
            return state;
    }
}

let store = redux.createStore(allReducer);
// store.subscribe(() => { console.log("store", store.getState()); });
export default store;