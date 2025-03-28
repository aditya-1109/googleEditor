import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCi-VTIZWUURcKoHbv4LqHONjQzbVSSf3M",
    authDomain: "editor-59f1b.firebaseapp.com",
    projectId: "editor-59f1b",
    storageBucket: "editor-59f1b.firebasestorage.app",
    messagingSenderId: "182333814150",
    appId: "1:182333814150:web:8847a46b6e8cf035a66807",
    measurementId: "G-N9THL1E54J"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
