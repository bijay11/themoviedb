import { createContext, useContext, useState, useEffect } from "react";

import { auth } from "../firebase";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [loginUser, setLoginUser] = useState(true);

  //to sign up
  const signup = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password);

  //to log In
  const login = (email, password) =>
    auth.signInWithEmailAndPassword(email, password);
  //to sign out
  const logout = () => auth.signOut();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    loginUser,
    setLoginUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
