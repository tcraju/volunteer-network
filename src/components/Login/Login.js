import React, { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { initializeLoginFramework, handleGoogleSignIn} from './LoginManager';
import './Login.css'
import EmptyHeader from '../EmptyHeader/EmptyHeader';



function Login() {

  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  });

  initializeLoginFramework();

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
    handleGoogleSignIn()
      .then(res => {
        handleResponse(res, true);
      })
  }

  const handleResponse = (res, redirect) => {
    setUser(res);
    setLoggedInUser(res);
    if (redirect) {
      history.replace(from);
    }
  }

  return (
    <div class='page-bg'>
        <EmptyHeader></EmptyHeader>
        <br/>
        <div id='login-area-padding'>
            <div className='login-method' onClick={googleSignIn}>
              <img src="https://iili.io/2RYDRp.png" alt="" />
              <span>Continue with Google</span>
              </div>
        </div>
    </div>
  );
}

export default Login;
