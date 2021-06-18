import { Card, Grid } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import './Login.css'
import firebase from "firebase/app";
import firebaseConfig from '../../firebase.config';
import "firebase/auth";
import TextField from '@material-ui/core/TextField';
import { MyContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
  const history = useHistory()
  const location = useLocation()
  let { from } = location.state || { from: { pathname: "/" } };
 const [newUser, setNewUser]= useState(false)
  const [loggedIn, setLoggedIn] = useContext(MyContext)
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    error: '',
    success: ''
  })
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)

  }
  const handleBlur = (e) => {
    let isFormValid = true;
    if (e.target.name === 'email') {
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value)

    }
    if (e.target.name === 'password') {
      const isPasswordValid = e.target.value.length > 6;
      isFormValid = isPasswordValid;
    }
    if (isFormValid) {
      const newUserInfo = { ...user }
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    //sign up with email and password
    if (user.email && user.name && user.password) {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then((user) => {
          const newUserInfo = { ...user }
          newUserInfo.error = '';
          newUserInfo.success = true;
          setUser(newUserInfo)

        })
        .catch((error) => {
          const newUserInfo = { ...user }
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }
    //Sign in with password and email
    if (!newUser&& user.email && user.password) {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user }
          newUserInfo.error = '';
          newUserInfo.success = true;
          setNewUser(newUserInfo);
          setLoggedIn(newUserInfo)
          history.replace(from)
        })
     
        .catch((error) => {
          const newUserInfo = { ...user }
          newUserInfo.error = error.message;
          setUser(newUserInfo);
         
        });
    }

    

  }



  //Google Sign In
  const googleSignin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then(res => {
        const { displayName, email } = res.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email
        }
        setLoggedIn(signedInUser)
        history.replace(from)
      })
  }
  //facebook sign in
  const fbSignIn = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(fbProvider)
      .then(function (res) {
        const { displayName, email } = res.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email
        }
        setLoggedIn(signedInUser)
        history.replace(from)
    
    })
  }

  const signInToggle = () => {
    setLoggedIn(true)
    setUser({ ...user })
  }
  const signUpToggle = () => {
    setLoggedIn(false)
    setUser({...user})
  }
  return (
    <div >
      <Grid container >
        <Grid item xs={12} md={4}></Grid>
        <Grid style={{ marginTop: '70px' }} item xs={12} md={4} >
          <Card style={{ padding: '16px' }}>
            {loggedIn ? <h2>Login</h2> : <h2>Create an account</h2> }
            <form onSubmit={handleSubmit} autoComplete="off">
             {!loggedIn&& <TextField
                onBlur={handleBlur}
                type="text"
                label="Name"
                name="name"
                fullWidth
                required
              />}
              <TextField
                onBlur={handleBlur}

                label="Email"
                name="email"

                fullWidth
                required
              />
              <TextField
                onBlur={handleBlur}

                label="Password"
                name="password"
                type="password"
                fullWidth
                required
              />
              {
                loggedIn ?
                  <input style={{ marginTop: '5px', width: '100%' }} type="submit" value="Login" />
                  : <input style={{ marginTop: '5px', width: '100%' }} type="submit" value="Sign up" />
              }
              
              <p style={{ color: 'red', textAlign: 'center' }}>{user.error}</p>
              {user.success && <p style={{ color: 'green', textAlign: 'center' }}>User Created Successfully</p>
              }
            </form>
            {
              loggedIn ?
                <>
                  <span style={{textAlign: 'center'}}>Don't have an account? </span>
                  <span
                    onClick={signUpToggle}
                    style={{ color: "orange", cursor: "pointer" }}>
                    Signup
                  </span>
                </> :
                <>
                  <span style={{textAlign:'center'}}>Already have an account? </span>
                  <span onClick={signInToggle}
                    style={{ color: "orange", cursor: "pointer" }}>
                    Login
                   </span>
                </>
            }
          </Card>
          <h6 style={{textAlign: 'center'}}>---------or--------</h6>
          <div
            onClick={googleSignin}
            className='google_login' style={{ textAlign: 'center', cursor: 'pointer' }}>
            <h6>Continue With Google</h6>
          </div>

          <div
            onClick={fbSignIn}
            className='fb_login' style={{ textAlign: 'center', cursor: 'pointer' }}>
            <h6>Continue With Facebook</h6>
          </div>
        </Grid>
        <Grid item xs={12} md={4}></Grid>
      </Grid>

    </div>
  );
};

export default Login;