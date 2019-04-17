import Firebase from 'firebase';

let config = {
    apiKey: "AIzaSyCk8DU_HmtvEU3ztkGUKCSkax1-7AN0GIY",
    authDomain: "fir-demo-10195.firebaseapp.com",
    databaseURL: "https://fir-demo-10195.firebaseio.com",
    projectId: "fir-demo-10195",
    storageBucket: "fir-demo-10195.appspot.com",
    messagingSenderId: "831484121980"
};
let app = Firebase.initializeApp(config);
export const db = app.database();
export const firebaseApp = app.auth();