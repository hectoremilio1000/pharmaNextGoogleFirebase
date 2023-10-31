import React, { createContext, useState, useEffect, useContext } from "react";
import { db } from "../lib/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "@/lib/firebase/auth"; // Importa la función onAuthStateChanged desde auth.js

export const AuthContext = createContext({ user: null });

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        // User is signed in
        setUser(authUser);
        const userRef = doc(db, "users", authUser.uid);
        getDoc(userRef).then((docSnapshot) => {
          if (docSnapshot.exists()) {
            setRole(docSnapshot.data().role);
          }
        });
      } else {
        // User is signed out
        setUser(null);
        setRole(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, role }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
