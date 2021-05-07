import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCipFlIzlRrIggP6PvjQoMQ9-hz3Zjw408",
    authDomain: "inspo-ef795.firebaseapp.com",
    projectId: "inspo-ef795",
    storageBucket: "inspo-ef795.appspot.com",
    messagingSenderId: "892064265530",
    appId: "1:892064265530:web:014056e3189126f3a48c03",
    measurementId: "G-LK6HY4MY17"
}

const fire = firebase.initializeApp(config)
export default fire;