import * as firebase from 'firebase';


const config = {
    apiKey: "AIzaSyB7QBA5AXmXRFUa5FbwC45lQUd09Feayxg",
    authDomain: "sindelantal-front.firebaseapp.com",
    databaseURL: "https://sindelantal-front.firebaseio.com",
    projectId: "sindelantal-front",
    storageBucket: "sindelantal-front.appspot.com",
    messagingSenderId: "440952660801"
};


export default firebase.initializeApp(config);
