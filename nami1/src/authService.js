import { auth } from "./firebase";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";

// Email signup
export const signUp = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Email login
export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Logout
export const logout = () => {
  return signOut(auth);
};

// Google login
const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => {
  return signInWithPopup(auth, provider);
};
