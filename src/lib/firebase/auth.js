import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged as _onAuthStateChanged,
} from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

// import { auth } from "@/src/lib/firebase/firebase";
export function onAuthStateChanged(cb) {
  return _onAuthStateChanged(auth, cb);
}

export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    const user = result.user;
    console.log(user);
    const userRef = doc(db, "users", user.uid);
    const docSnapShot = await getDoc(userRef);
    console.log(docSnapShot);
    if (!docSnapShot.exists()) {
      await setDoc(userRef, {
        email: user.email,
        nombre: user.displayName,
        role: "cliente",
      });
    }
  } catch (error) {
    console.log("Error al iniciar sesión con Google:", error);
  }
}

export async function signOut() {
  try {
    return auth.signOut();
  } catch (error) {
    console.error("Error signing out with Google", error);
  }
}
