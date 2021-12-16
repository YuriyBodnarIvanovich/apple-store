import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';

import MainPage from './pages/MainPage/MainPage.jsx';
import CatalogOfGoods from './pages/CatalogOfGoods/CatalogOfGoods.jsx';
import Footer from './components/Footer/Footer';
import AuthBox from './components/Authorization/AuthBox';
import Menu from '../src/components/Menu/Menu';

function App() {
  const dispatch = useDispatch();
  const themeMode = useSelector((state) => state.MainPage.themeMode);

  const [showInputBox, setStatusOfInputBox] = useState(false);
  document.title = useSelector((state) => state.MainPage.title);

  function statusOfRoles(resUser) {
    for (let i = 0; i < resUser[0].Roles.length; i++) {
      if (resUser[0].Roles[i].role === 'admin') {
        console.log('Admin Status!!');
        dispatch({ type: 'STATUS_OF_ROLE_ADMIN', status: true });
      }
    }
  }
  // function checkJWT() {
  //   axios
  //     .post(
  //       '/checkJWT',
  //       {},
  //       {
  //         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  //       }
  //     )
  //     .then(function (response) {
  //       console.log(response.data.userData);
  //       let resUser = JSON.parse(JSON.stringify(response.data.userData));
  //       dispatch({ type: 'CHANGE_ARRAY_OF_USERS', array: resUser });
  //       dispatch({ type: 'CHANGE_STATUS_OF_USER', userStatus: true });
  //       statusOfRoles(resUser);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //       dispatch({ type: 'CHANGE_STATUS_OF_USER', userStatus: false });
  //     });
  // }
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setTimeout(checkJWT(), 0);
  //   }, 0);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <BrowserRouter>
      <div className={`${themeMode ? "main_Dark" : "main_Light"}`}>
        <Menu setStatusOfInputBox={setStatusOfInputBox} />
        {showInputBox ? (
          <AuthBox
            showInputBox={showInputBox}
            setStatusOfInputBox={setStatusOfInputBox}
          />
        ) : null}
        <Route exact path='/' render={() => <MainPage />} />
        <Route exact path='/CatalogOfGoods' render={() => <CatalogOfGoods />} />
        <div className="for_change_theme">
            <label className="switch">
                <input type="checkbox"  onClick={()=>{dispatch({type:"CHNAGE_THEME",themeMode: !themeMode})}}/>
                <span className="slider"/>
            </label>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
