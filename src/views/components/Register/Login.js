import React from 'react';
import { useForm } from "react-hook-form";
import {Link, useLocation} from "react-router-dom";
import { BsArrowRight } from 'react-icons/bs';
import UseAuth from '../../../hooks/useAuth';
import PreLoader from '../../custom/PreLoader.js';
import '../../../styles/Registar.css';
import { Alert } from '@mui/material';

const Login = () => {
    const { register, handleSubmit, reset } = useForm();
    const {loginUser, googleSignIn, isLoading, error} = UseAuth();
    const location = useLocation();
    const onSubmit = data => {
        const email = data.email;
        const password = data.pass;
        // login user 
        loginUser( email, password, location);
        reset();
    };
  
    // Login with google 
    const handelGoogleLogIn = () =>{
        googleSignIn(location);
    }
    return (
        <div className='registry-form-area'>
             <div className="registry-form-container">
               {isLoading ? <PreLoader />
               :<div className="registry-form">
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
                 {error && <Alert style={{fontSize:"18px"}} severity="error">{error}</Alert>}
                 </div>}
             </div>
        </div>
    );
};

export default Login;