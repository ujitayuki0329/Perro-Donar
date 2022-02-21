import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from 'firebase/auth'
// import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyCRdzxixev2Fhgf1DFJLfsANqdUhk_tGwA",
  authDomain: "perro-donar-3e35b.firebaseapp.com",
  projectId: "perro-donar-3e35b",
  storageBucket: "perro-donar-3e35b.appspot.com",
  messagingSenderId: "884182918227",
  appId: "1:884182918227:web:5d006494311fd519b2d2a6",
  measurementId: "G-4JNYRLV9WS"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth();
// const analytics = getAnalytics(firebase)

export default {app, db, auth};

