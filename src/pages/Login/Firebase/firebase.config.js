import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCVuKt4gwxnO_Wl0sOJwM3RztVd6A3Rq3g",
  authDomain: "jerin-parlour-e716c.firebaseapp.com",
  projectId: "jerin-parlour-e716c",
  storageBucket: "jerin-parlour-e716c.appspot.com",
  messagingSenderId: "721172226025",
  appId: "1:721172226025:web:9c75999b1141be4c39f578"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);