import React from 'react';
import ForceStyle from './Footer.module.css';
import {useDispatch, useSelector} from "react-redux";

const Footer = () => {
  const data = true;
  const themeMode = useSelector((state) => state.MainPage.themeMode);

  return (
    <div className={`${themeMode ? ForceStyle.end_dark : ForceStyle.end}`}>
      <div className={ForceStyle.container}>
        <div className={ForceStyle.logo}>
          {themeMode ? (
            <h3 style={{ color: 'white' }}>Apple device</h3>
          ) : (
            <img
              src={
                'http://134976.lp.tobiz.net/img/400x0/1f045332bcf4e95ba5f9c051ce9fc55b.png'
              }
              alt='Apple Device'
            />
          )}
        </div>
        <div className={ForceStyle.info}>
          {themeMode ? (
            <p style={{ color: 'white' }}>
              LLC "Apple Devices", 123456, Moscow, st. Central 1, office 1 TIN
              1234567890 OGRN 123456789012
            </p>
          ) : (
            <p>
              LLC "Apple Devices", 123456, Moscow, st. Central 1, office 1 TIN
              1234567890 OGRN 123456789012
            </p>
          )}
        </div>
        <div className={ForceStyle.container_of_number}>
          {themeMode ? (
            <div className={ForceStyle.number_of_phone}>
              <img
                src='https://www.flaticon.com/svg/vstatic/svg/2948/2948005.svg?token=exp=1616859060~hmac=1db4a27b6966a4b71bf8203d2277b73f'
                alt='phone-icon'
              />
              <p style={{ color: 'white' }}>+38 099 999 9999</p>
            </div>
          ) : (
            <div className={ForceStyle.number_of_phone}>
              <img
                src='https://img.icons8.com/android/24/000000/phone.png'
                alt='phone-icon'
              />
              <p>+38 099 999 9999</p>
            </div>
          )}
          <div className={ForceStyle.info_add}>
            {themeMode ? (
              <p style={{ color: 'white' }}>The call in Ukraine is free</p>
            ) : (
              <p>The call in Ukraine is free</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
