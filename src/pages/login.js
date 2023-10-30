import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth, firestore } from '../lib/firebase/config'
import { doc, setDoc, getDoc } from 'firebase/firestore'

function Login() {

    const { user, role } = useContext(AuthContext);

    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();

        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log(user);
            const userRef = doc(firestore, 'users', user.uid)
            const docSnapShot = await getDoc(userRef);
            if (!docSnapShot.exists()) {
                await setDoc(userRef, {
                    email: user.email,
                    nombre: user.displayName,
                    role: 'cliente'
                })
            }
        } catch (error) {
            console.log("Error al iniciar sesión con Google:", error);
        }
    };

    const handleSignOut = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
    };

    console.log(user);
    console.log(role);

    return (
        <>
            <h1>Login Page</h1>
       
        <div>
            
            <button onClick={signInWithGoogle}>Login with Google</button>
            <button onClick={handleSignOut}>Salir with Google</button>
            </div>
            
        </>
    );
}

export default Login;