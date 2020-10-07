import * as firebase from 'firebase';

let firebaseConfig = {
    apiKey: "AIzaSyBx_Kgbr5MUlvkboVM9iPlJFAscW8IvoTk",
    authDomain: "todo-ff2a9.firebaseapp.com",
    databaseURL: "https://todo-ff2a9.firebaseio.com",
    projectId: "todo-ff2a9",
    storageBucket: "todo-ff2a9.appspot.com",
    messagingSenderId: "936183807285",
    appId: "1:936183807285:web:a74093e95b2c2a0f80607c",
    measurementId: "G-45BPBFS9GD"
};

firebase.initializeApp(firebaseConfig);
// firebase.analytics();
export const NoteData = firebase.database().ref('NoteData');