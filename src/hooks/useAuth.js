import initializeAuth from "../firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile,  onAuthStateChanged, signOut } from "firebase/auth";
import {useDispatch} from 'react-redux';
import { useEffect, useState } from "react";
import { googleLogin, register } from "../redux/actions/authAction";
import { useNavigate } from "react-router-dom";


// Initialize firebase app
initializeAuth();

const useAuth = () =>{
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const navigate = useNavigate();
    
    // create user by password
    const createUser = (email, password, name) =>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setError("");
            const userEmail = userCredential.user.email;
            const userName = userCredential.user.name;
            const newUser = {email:userEmail , displayName: userName};
            // setUser(userCredential?.user);
            // user Info in database
            dispatch(register(newUser));
            // send name to the firebase
            updateProfile(auth.currentUser, {
                displayName: name
            })
            .then(() =>{})
            .catch(()=>{})
            // Redirect to home page after create account
            navigate("/");
          })
          .catch((error)=> {
              const errorMessage = error.message;
              setError(errorMessage);
          })
          .finally(() => setIsLoading(false))
    };


    // Login user
    const loginUser = (email, password, location) =>{
        console.log(location);
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password )
        .then((userCredential) => {
            setError("");
            // Pgae redirect
            const destination = location?.state?.from || "/";
                navigate(destination);
        })
        .catch((error =>{
            const errorMessage = error.message;
            setError(errorMessage);
        }))
        .finally(() => setIsLoading(false))
    };


    // Google sign in
    const provider = new GoogleAuthProvider();
    const googleSignIn = (location) =>{
        setIsLoading(true);
        signInWithPopup(auth, provider)
        .then((result) =>{
            setError("");
            const email = result.user.email;
            const name = result.user.displayName;
            const newUser = {email, name};
            // Pgae redirect
            const destination = location?.state?.from || "/";
                navigate(destination);
            // Save user info In database
            dispatch(googleLogin(newUser));
        })
        .catch((error) =>{
            setError(error.message);
        })
        .finally(() =>  setIsLoading(false))
    }


    // Observer
    useEffect(() =>{
         const unSubscribe = onAuthStateChanged (auth, (user) =>{
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