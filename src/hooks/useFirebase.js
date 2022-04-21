import { getAuth,signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Login/Firebase/firebase.init";



initializeAuthentication()

const useFirebase=()=>{
const [user, setUser] = useState({})

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const signInUsingGoogle=()=>{
   return signInWithPopup(auth, googleProvider)
   
}
const logOut=()=>{
    signOut(auth)
    .then(()=>{
setUser({})
    })
}
useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
         setUser(user)
        } 
      });
},[])
return{
    user,
    signInUsingGoogle,
    logOut
}
}
export default useFirebase;


// import React, { useEffect, useState } from 'react';
// import initializeAuthentication from '../pages/Login/Firebase/firebase.init';
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

// initializeAuthentication()

// const useFirebase = () =>{
//   const [user, setUser] = useState({});

//   const auth = getAuth();

//   const registerUser = (email, password) =>{
//      createUserWithEmailAndPassword(auth, email, password)
//      .then((userCredential) => {
//       // Signed in 
//       const user = userCredential.user;
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // ..
//     });
//   }

// const loginUser = (email, password)=>{
//   signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });
// }


//   useEffect(()=>{
//   const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         const uid = user.uid;
//         setUser(user);
//         // ...
//       } else {
//         setUser({})
//       }
//     });
//     return () => unsubscribe;
//   },[])

//     const logOut = () =>{
//       signOut(auth).then(() => {
//         // Sign-out successful.
//       }).catch((error) => {
//         // An error happened.
//       });
      
//     }
//     return{
//       user,
//       registerUser,
//       loginUser,
//       logOut
//     }
// }

// export default useFirebase;
