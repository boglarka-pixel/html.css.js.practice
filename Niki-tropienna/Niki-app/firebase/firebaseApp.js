import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDX5bjmo4HYPMEfQOoO6HdMk5bVetF0CkI",
    authDomain: "eniisdrawing.firebaseapp.com",
    projectId: "eniisdrawing",
    storageBucket: "eniisdrawing.appspot.com",
    messagingSenderId: "652041553961",
    appId: "1:652041553961:web:1b4134dacaf95f81bc7438"
};

firebase.initializeApp(firebaseConfig);

export { firebase };