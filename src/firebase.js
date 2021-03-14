import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDJlmJm__A0eXw5mHnWPiz-t2o8wglcDHE",
    authDomain: "react-contact-form-40927.firebaseapp.com",
    projectId: "react-contact-form-40927",
    storageBucket: "react-contact-form-40927.appspot.com",
    messagingSenderId: "1047926452432",
    appId: "1:1047926452432:web:62134d322923945265aed5"
})

const db = firebaseApp.firestore()

export {db}