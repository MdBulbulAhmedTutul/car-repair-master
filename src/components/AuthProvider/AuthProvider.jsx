import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);

    // create User
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout
    const logOut = () => {
        return signOut(auth)
    }

    // userStaeManage
    useEffect(() => {
        const unSubsCribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in auth state change', currentUser)
            setUser(currentUser)
        })
        return () => {
            unSubsCribe();
        }
    }, [])

    const authInfo = {
        createUser,
        user,
        logOut,
        logIn
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;