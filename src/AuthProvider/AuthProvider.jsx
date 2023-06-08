import { createContext } from "react";
import { app } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

export const authContext = createContext(null);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const googleSignIn = ()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }


// sign UP
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }


    // sign In
    const LogIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }


    // logout
    const LogOut = ()=>{
        setLoading(true)

        return signOut(auth)
    }


    // update profile
    const userProfile = (name,photo)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL:photo
        })

    }

    useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            // console.log('currentUser', currentUser);
            setLoading(false)
        })
        return ()=>{
            return unsubscribe()
        }
    },[])
 


    const authInfo ={
        user,
        loading,
        LogIn,
        LogOut,
        createUser,
        userProfile,
        googleSignIn
    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;