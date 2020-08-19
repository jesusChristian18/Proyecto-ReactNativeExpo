import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBFKwTAWJrEXVwL8WskARYuF5QUyLJ2U7g",
    authDomain: "tenedores-84433.firebaseapp.com",
    databaseURL: "https://tenedores-84433.firebaseio.com",
    projectId: "tenedores-84433",
    storageBucket: "tenedores-84433.appspot.com",
    messagingSenderId: "681086150491",
    appId: "1:681086150491:web:876379154155d02e031c7e"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);