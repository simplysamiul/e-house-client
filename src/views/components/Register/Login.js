import React from 'react';
import { useForm } from "react-hook-form";
import {Link} from "react-router-dom";
import { BsArrowRight } from 'react-icons/bs';
import '../../../styles/Registar.css';
import { googleSignIn, createUser, loginUser } from '../../../hooks/useFirebase';

const Login = () => {
    const { register, handleSubmit, reset } = useForm();
    // const {googleSignIn, isLoading} = useAuth();
    const onSubmit = data => {
        console.log(data)
        const email = data.email;
        const password = data.pass;
        // login user 
        loginUser( email, password);
        reset();
    };
  
    // Login with google 
    const handelGoogleLogIn = () =>{
        googleSignIn();
    }
    return (
        <div className='registry-form-area'>
             <div className="registry-form-container">
               <div className="registry-form">
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='email' type="email" {...register("email", { required: true })} />
                    <input placeholder='password' type="password" {...register("pass")} />
                    <button className='registry-submit-button' type='submit'>Login</button>
                    </form>
                 <div className="anotherr-option">
                    <p>--------- or ---------</p>
                    <button onClick={handelGoogleLogIn} className='google-login-button'>Login with Google</button>
                    <br />
                    <Link to="/register">Create Account <BsArrowRight /></Link>
                 </div>
                 </div>
             </div>
        </div>
    );
};

export default Login;