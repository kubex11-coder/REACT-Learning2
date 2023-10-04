import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyD8BRB5HSOPi2iQIWnLAL29mRbCi-cz_wA",
    authDomain: "movies-project-9cc47.firebaseapp.com",
    projectId: "movies-project-9cc47",
    storageBucket: "movies-project-9cc47.appspot.com",
    messagingSenderId: "280976491291",
    appId: "1:280976491291:web:0a520d33731e0d437949be",
}

//počáteční nastavení firebase
firebase.initializeApp(firebaseConfig)

// počáteční nastavení služeb (services)
const projectFirestore = firebase.firestore()

export { projectFirestore }
