import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from './firebase.config';
import './Login.css'
import logo from '../../images/logos/logo.png'

const Login = () => {
    const [ loggedInUser, setLoggedInUser ] = useContext(UserContext);

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            var { displayName, email, photoURL } = result.user;
            const signedInUser = { username: displayName, email, photoURL};
            setLoggedInUser(signedInUser);
            history.replace(from);
        }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }
    return (
        <>
            <img className="logo mt-5" src={logo} alt="" />
            <div className="login-container">
                <div className="container d-flex align-items-center justify-content-center">
                    <div>
                        <h2 className="pb-3 text-center">Login with</h2>
                        <div className="text-center">
                            <button className="google-btn" onClick={handleGoogleSignIn}>
                                <img src={'https://i.imgur.com/en07y50.png'} className="google-icon" alt="" />
                        Continue with google</button>
                        </div>
                        <div className="text-center pt-3">
                            <span>Don't have an account? <a href="#">Create an account</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;