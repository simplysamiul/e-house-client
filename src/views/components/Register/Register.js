import { Alert } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import UseFirebase from '../../../hooks/useFirebase';
import '../../../styles/Registar.css';
import PreLoader from '../../custom/PreLoader';

const Register = () => {
    const { register, handleSubmit, reset } = useForm();
    const {createUser, googleSignIn, isLoading, error} = UseFirebase();
    const onSubmit = data => {
        console.log(data);
        const email = data.email;
        const password = data.pass;
        const name = data.name;
        // Create user
        createUser(email, password, name);
        reset();
    };
    // Login with google 
    const handelGoogleLogIn = () =>{
        googleSignIn();
    }
    return (
        <div className='registry-form-area'>
             <div className="registry-form-container">
                 {isLoading ? <PreLoader />
                 :<div className="registry-form">
                    <h1>Sign-Up</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='FullName' type="text" {...register("name", { required: true, maxLength: 20 })} />
                    <input placeholder='email' type="email" {...register("email", { required: true })} />
                    <input placeholder='password' type="password" {...register("pass")} />
                    <button className='registry-submit-button' type='submit'>Login</button>
                    </form>
                 <div className="anotherr-option">
                    <p>--------- or ---------</p>
                    <button onClick={handelGoogleLogIn}  className='google-login-button'>Login with Google</button>
                    <br />
                    <Link to="/login">Login <BsArrowRight /></Link>
                 </div>
                 {error && <Alert style={{fontSize:"18px"}} severity="error">{error}</Alert>}
                 </div>}
             </div>
        </div>
    );
};

export default Register;