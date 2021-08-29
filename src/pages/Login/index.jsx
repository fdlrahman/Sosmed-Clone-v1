import React from 'react'
import './Login.css'
import firebase, { provider } from '../../config/firebase'
import { connect } from 'react-redux'

function Login({ setUser }) {
    const handleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then(res => setUser(res.user))
            .catch(err => console.log('error', err));
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"  
                />
            </div>
            <div className="login__text">
                <img 
                    src="https://download.logo.wine/logo/Facebook/Facebook-Logo.wine.png"
                />
            </div>
            <div className="login__button">
                <button onClick={handleSignIn}>Sign In</button>
            </div>
        </div>
    )
}

const reduxDispatch = dispatch => ({
    setUser: user => dispatch({ type: 'SET_USER', value: user })
})

export default connect(null, reduxDispatch)(Login);
