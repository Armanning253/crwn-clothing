import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyApJ2ZqGKGsLu1oONftM2c3rz8oFuoMp0U",
    authDomain: "crown-db-aedf7.firebaseapp.com",
    projectId: "crown-db-aedf7",
    storageBucket: "crown-db-aedf7.appspot.com",
    messagingSenderId: "683701637282",
    appId: "1:683701637282:web:b452e9ba3cf6e61c9fc7fb",
    measurementId: "G-TNYZEK1XMM"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;