import React, { useContext, useState, useEffect } from 'react';
import { firebase_app } from '../firebase';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return firebase_app.auth().createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return firebase_app.auth().signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return firebase_app.auth().signOut();
  }

  function resetPassword(email) {
    return firebase_app.auth().sendPasswordResetEmail(email);
  }

  // function updateEmail (email) {
  //   return currentUser.updateEmail(email)
  // }

  // function updatePassword (password) {
  //   return currentUser.updatePassword(password)
  // }

  useEffect(() => {
    const unsubscribe = firebase_app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    //   updateEmail,
    // updatePassword
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
