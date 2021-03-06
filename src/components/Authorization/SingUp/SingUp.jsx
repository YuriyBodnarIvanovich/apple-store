import React, { useState } from 'react';
import SingUpStyle from './SingUp.module.css';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const SingUp = (props) => {
  // const dataApple = useSelector((state) => state.ApplePage);
  const themeMode = useSelector((state) => state.MainPage.themeMode);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [errorMessageData, setDataOfError] = useState('');
  const [errorMessage, setStatusOfError] = useState(false);

  function sendData() {
    axios
      .post('/singUp', {
        name: userName,
        email: userEmail,
        password: userPassword,
      })
      .then(function (response) {
        console.log(response);
        setUserName('');
        setUserEmail('');
        setUserPassword('');
      })
      .catch(function (error) {
        console.log('From server!!!!');
        console.log(error);
        if (error.response.data.textErr !== undefined) {
          console.log(error.response.data.textErr);
          setDataOfError(error.response.data.textErr);
        } else {
          console.log(error.response.data);
          setDataOfError('The password is weak');
        }
        setStatusOfError(true);
      });
  }
  return (
    <div className={`${SingUpStyle.container}`}>
      <div className={`${SingUpStyle.logo}`}>
        <div className={`${SingUpStyle.logo_background}`}>
          <div className={SingUpStyle.exit}>
            <img
              src='https://img.icons8.com/ios/24/000000/close-window.png'
              onClick={() => {
                props.setStatusOfInputBox(false);
              }}
              alt='close-icon'
            />
          </div>
          <div className={SingUpStyle.logoText}>
            <p>Authorization</p>
          </div>
        </div>
      </div>
      <div className={`${SingUpStyle.inputField}`}>
        <div className={SingUpStyle.containerInput}>
          <input
            id='username'
            placeholder={'Username'}
            value={userName}
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />
          <input
            id='email'
            placeholder={'Email'}
            type='email'
            value={userEmail}
            onChange={(event) => {
              setUserEmail(event.target.value);
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
              className={SingUpStyle.errorMessage}
              style={{ fontSize: '14px' }}
            >
              {errorMessageData}
            </p>
          ) : null}
        </div>
        <div className={`${SingUpStyle.forSingUpButton}`}>
          <button onClick={sendData}>Sing UP</button>
        </div>
        <div className={`${SingUpStyle.showSingInContainer}`}>
          <p
            onClick={() => {
              props.setStatusOfBox(false);
            }}
          >
            I already have an account
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
