// import firebase from "firebase/app";
import firebase from "firebase/compat/app"

if (!firebase.apps.length) {
firebase.initializeApp({
  apiKey: "AIzaSyCRdzxixev2Fhgf1DFJLfsANqdUhk_tGwA",
  authDomain: "perro-donar-3e35b.firebaseapp.com",
  projectId: "perro-donar-3e35b",
  storageBucket: "perro-donar-3e35b.appspot.com",
  messagingSenderId: "884182918227",
  appId: "1:884182918227:web:5d006494311fd519b2d2a6",
  measurementId: "G-4JNYRLV9WS"

})
}

export default firebase