import React from 'react';
import MenuStyle from './Menu.module.css';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import UserInterface from '../UserInterface/UserInterface';

const Menu = (props) => {
  const data = true;
  const dispatch = useDispatch();

  const handleTitle = (title) => {
    dispatch({ type: 'CHNAGE_TITLE', title });
  };

  return (
    <div className={MenuStyle.main_Container}>
      <div className={MenuStyle.main}>
        <div className={MenuStyle.logo}>
          <NavLink to='/' onClick={() => handleTitle('Apple device')}>
            {data.darkTheme ? (
              <h3 style={{ color: 'white' }}>Apple device</h3>
            ) : (
              <img
                src={
                  'http://134976.lp.tobiz.net/img/400x0/e82506fcf71d9af9f785610ca969d08e.png'
                }
                alt='Apple Device'
              />
            )}
          </NavLink>
        </div>
        <div className={MenuStyle.menu_logo}>
          {data.darkTheme ? (
            <p style={{ color: 'white' }}>Menu</p>
          ) : (
            <img
              src='https://img.icons8.com/ios-filled/64/000000/menu--v1.png'
              alt='burger-icon'
            />
          )}
        </div>
        <div className={MenuStyle.add_information_container}>
          <div
            className={`${
              data.darkTheme
                ? MenuStyle.add_information_dark
                : MenuStyle.add_information
            }`}
          >
            <NavLink to='/' onClick={() => handleTitle('Apple device')}>
              <p className={MenuStyle.menu_item}>Main Page</p>
            </NavLink>
            <p className={MenuStyle.menu_item}>·</p>
            <NavLink to='/CatalogOfGoods' onClick={() => handleTitle('Goods')}>
              <p className={MenuStyle.menu_item}>Goods</p>
            </NavLink>
            <p className={MenuStyle.menu_item}>·</p>
            <p className={MenuStyle.menu_item}>Reviews</p>
            <p className={MenuStyle.menu_item}>·</p>
            <p className={MenuStyle.menu_item}>Payment and delivery</p>
            <p className={MenuStyle.menu_item}>·</p>
            <NavLink to='/Contact' onClick={() => handleTitle('Contacts')}>
              <p className={MenuStyle.menu_item}>Contacts</p>
            </NavLink>
          </div>
          <div className={MenuStyle.number_of_phone_container}>
            <div
              className={`${
                data.darkTheme
                  ? MenuStyle.number_of_phone_dark
                  : MenuStyle.number_of_phone
              }`}
            >
              {data.darkTheme ? null : (
                <img
                  className={MenuStyle.numberOfPhoneIMG}
                  src='https://img.icons8.com/android/24/000000/phone.png'
                  alt='phone-icon'
                />
              )}

              {data.darkTheme ? (
                <p className={MenuStyle.number_of_phone_title_dark}>
                  +38 099 999 9999
                </p>
              ) : (
                <p className={MenuStyle.number_of_phone_title}>
                  +38 099 999 9999
                </p>
              )}
              {data.userStatus ? (
                <UserInterface />
              ) : (
                <button
                  onClick={() => {
                    props.setStatusOfInputBox(true);
                  }}
                >
                  Sing in
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Menu;
