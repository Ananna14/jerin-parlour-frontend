import React, { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from '../pages/Login/Firebase/firebase.config';


const useFirebase = () =>{
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState('');

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();


  const registerUser = (email, password) =>{
    setIsLoading(true);
     createUserWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
      setAuthError('');

    })
    .catch((error) => {
      setAuthError(error.message);
      // ..
    })
    .finally(() => setIsLoading(false));
  }

  
  // redirect-location-history
const loginUser = (email, password, location, navigate)=>{
  setIsLoading(true);
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
      // redirect-location-history-start
      const destination = location?.state?.from || '/admin/admin/review';
      navigate(destination);
        // redirect-location-history-end
    setAuthError('');
  })
  .catch((error) => {
    setAuthError(error.message);
  })
  .finally(() => setIsLoading(false));
}

//GOOGLE-SIGNINWITHPOpup
const signInWithGoogle = (location, navigate) =>{
  signInWithPopup(auth, googleProvider)
  .then((result) => {
     setUser(result.user);
     setAuthError('');

     //save user to database
    //  saveUser(result.user.email, result.user.displayName, 'PUT');

     const destination = location?.state?.from || '/home';
     navigate(destination);
  }).catch((error) => setAuthError(error))
  .finally(setIsLoading(false));
}

  useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(user);
        // ...
      } else {
        setUser({})
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  },[])

    const logOut = () =>{
      setIsLoading(true);
      signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      })
      .finally(()=> setIsLoading(false));
      
    }
    return{
      user,
      isLoading,
      authError,
      signInWithGoogle,
      registerUser,
      loginUser,
      logOut
    }
}

export default useFirebase;
