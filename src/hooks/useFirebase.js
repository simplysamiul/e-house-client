import initializeAuth from "../firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile,  onAuthStateChanged, signOut } from "firebase/auth";
// import { useEffect, useState } from "react";


// Initialize firebase app
initializeAuth();

// const useFirebase = () =>{
//     const [user, setUser] = useState({});
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState("");
    const auth = getAuth();

    // create user by password
    export const createUser = (email, password, name) =>{
        // setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // setError("");
            const newUser = {email, displayName : name}
            console.log(newUser);
            // setUser(newUser);
            // user Info in database

            // send name to the firebase
            updateProfile(auth.currentUser, {
                displayName: name
            })
            .then(() =>{})
            .catch(()=>{})
          })
          .catch((err)=> {
              const errorMessage = err.messaage;
              console.log(errorMessage);
            //   setError(errorMessage);
          })
        //   .finally(() => setIsLoading(false))
    };


    // Login user
    export const loginUser = (email, password) =>{
        // setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // setError("");
        })
        .catch((err =>{
            const errorMessage = err.messaage;
            // setError(errorMessage);
        }))
        // .finally(() => setIsLoading(false))
    };


    // Google sign in
    const provider = new GoogleAuthProvider();
    export const googleSignIn = () =>{
        // setIsLoading(true);
        signInWithPopup(auth, provider)
        .then((result) =>{
            const user = result.user;
            console.log(user);
            // setError("");
            // Save user info In database
        })
        .catch((err) =>{
            // setError(err.messaage);
        })
        // .finally(() =>  setIsLoading(false))
    }


    // // Observer
    // useEffect(() =>{
    //     const unSubscribe =  onAuthStateChanged (auth, (user) =>{
    //         if(user){
    //             setUser(user);
    //         }else{
    //             setUser({});
    //         }
    //         setIsLoading(false);
    //     });
    //     return () => unSubscribe;
    // }, [auth]);


     // Log Out 
     export const logOut = () =>{
        // setIsLoading(true);
        signOut(auth)
        .then(()=>{

        })
        .catch((error)=>{

        })
        // .finally(()=> setIsLoading(false));
    };


//     return{
//         user,
//         error,
//         isLoading,
//         createUser,
//         googleSignIn,
//         loginUser,
//         logOut
//     }
// }

// export default useFirebase;