import React, { useState } from 'react';
import SingInStyle from './SingIn.module.css';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import SingUpStyle from '../SingUp/SingUp.module.css';

const SingIn = (props) => {
  // const data = useSelector((state) => state.ApplePage);
  const dispatch = useDispatch();

  const [userEmail, setEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [errorMessage, setStatusOfError] = useState(false);

  function check() {
    axios
      .post('/authorize', {
        email: userEmail,
        password: userPassword,
      })
      .then(function (response) {
        console.log(response);
        console.log(response.data.token.id_token);
        localStorage.setItem('token', response.data.token.id_token);
        props.setStatusOfInputBox(false);
        dispatch({ type: 'CHANGE_STATUS_OF_USER', userStatus: true });
      })
      .catch(function (error) {
        setStatusOfError(true);
        console.log(error);
      });
  }

  return (
    <div className={`${SingInStyle.container}`}>
      <div className={`${SingInStyle.logo}`}>
        <div className={`${SingInStyle.logo_background}`}>
          <div className={SingInStyle.exit}>
            <img
              src='https://img.icons8.com/ios/24/000000/close-window.png'
              onClick={() => {
                props.setStatusOfInputBox(false);
              }}
              alt='close-icon'
            />
          </div>
          <div className={SingInStyle.logoText}>
            <p>Authentication</p>
          </div>
        </div>
      </div>
      <div className={`${SingInStyle.inputField}`}>
        <div className={SingInStyle.containerInput}>
          <input
            id='email'
            placeholder={'Email'}
            type='email'
            value={userEmail}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <input
            id='password'
            placeholder={'Password'}
            type='password'
            value={userPassword}
            onChange={(event) => {
              setUserPassword(event.target.value);
            }}
          />
          {errorMessage ? (
            <p
              className={SingInStyle.errorMessage}
              style={{ fontSize: '14px' }}
            >
              Bad password or email
            </p>
          ) : null}
        </div>
        <div className={`${SingInStyle.forSingUpButton}`}>
          <button
            onClick={() => {
              check();
            }}
          >
            Sing In
          </button>
        </div>
        <div className={`${SingUpStyle.showSingInContainer}`}>
          <p
            onClick={() => {
              props.setStatusOfBox(true);
            }}
          >
            I already have an account
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingIn;
