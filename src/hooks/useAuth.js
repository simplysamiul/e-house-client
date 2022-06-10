import initializeAuth from "../firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile,  onAuthStateChanged, signOut } from "firebase/auth";
import {useDispatch} from 'react-redux';
import { useEffect, useState } from "react";
import { googleLogin, register } from "../redux/actions/authAction";


// Initialize firebase app
initializeAuth();

const useAuth = () =>{
    const [user, setUser] = useState({});
    console.log(user.email);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const auth = getAuth();
    const dispatch = useDispatch();
    
    // create user by password
    const createUser = (email, password, name) =>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setError("");
            const newUser = {email, displayName : name};
            setUser(newUser);
            // user Info in database
            dispatch(register(newUser));
            // send name to the firebase
            updateProfile(auth.currentUser, {
                displayName: name
            })
            .then(() =>{})
            .catch(()=>{})
          })
          .catch((error)=> {
              const errorMessage = error.message;
              setError(errorMessage);
          })
          .finally(() => setIsLoading(false))
    };


    // Login user
    const loginUser = (email, password) =>{
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setError("");
            setUser(email);
        })
        .catch((error =>{
            const errorMessage = error.message;
            setError(errorMessage);
        }))
        .finally(() => setIsLoading(false))
    };


    // Google sign in
    const provider = new GoogleAuthProvider();
    const googleSignIn = () =>{
        setIsLoading(true);
        signInWithPopup(auth, provider)
        .then((result) =>{
            setError("");
            const email = result.user.email;
            const name = result.user.displayName;
            const userInfo = {email, name};
            setUser(userInfo);
            // Save user info In database
            dispatch(googleLogin(userInfo));
        })
        .catch((error) =>{
            setError(error.message);
        })
        .finally(() =>  setIsLoading(false))
    }


    // Observer
    useEffect(() =>{
        const unSubscribe =  onAuthStateChanged (auth, (user) =>{
            if(user){
                setUser(user);
            }else{
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unSubscribe;
    }, [auth]);


     // Log Out 
    const logOut = () =>{
        setIsLoading(true);
        signOut(auth)
        .then(()=>{
            setUser({});
        })
        .catch((error)=>{

        })
        .finally(()=> setIsLoading(false));
    };


    return{
        user,
        error,
        isLoading,
        createUser,
        googleSignIn,
        loginUser,
        logOut
    }
}

export default useAuth;