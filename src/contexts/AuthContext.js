import React, { createContext, useState, useEffect } from 'react';
import { auth, firestore } from '../lib/firebase/config';
import { doc, setDoc, getDoc } from 'firebase/firestore'


export const AuthContext = createContext({user:null});

export const AuthContextProvider = ({ children }) => {

    
    const [user, setUser] = useState(null);
    const [role, setRole] = useState(null);
    
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async(userAuth) => {
            setUser(userAuth);
            if (userAuth) {
                const userRef = doc(firestore, 'users', userAuth.uid);
                const docSnapshot = await getDoc(userRef);
                if (docSnapshot.exists()) {
                    setRole(docSnapshot.data().role);
                    console.log(role);

                }
            }
        });

        return () => unsubscribe();
    }, []);



    return (
        <AuthContext.Provider value={{ user, role }}>
            {children}
        </AuthContext.Provider>
)

}