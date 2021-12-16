import React from 'react';
import Style from './About_us.module.css';
import { useSelector, useDispatch } from 'react-redux';

const AboutUs = () => {
  const themeMode = useSelector((state) => state.MainPage.themeMode);

  const data = true;
  return (
    <div
      className={`${
        themeMode
          ? Style.about_us_container_dark
          : Style.about_us_container
      }`}
    >
      <div className={Style.about_us}>
        <img
          src={
            'http://134976.lp.tobiz.net/img/900x700/c34e1bb8979db325c2ed85e17fa4b50b.jpg'
          }
          alt='apple-office'
        />
        <div className={Style.about_us_text_container}>
          {themeMode ? (
            <h1 style={{ color: 'white' }}>Who are we?</h1>
          ) : (
            <h1>Who are we?</h1>
          )}
          <div className={Style.for_hr}>
            {themeMode ? (
              <hr style={{ backgroundColor: 'white' }} />
            ) : (
              <div className={Style.for_hr}>
                <hr />
              </div>
            )}
          </div>
          {themeMode ? (
            <p
              className={Style.add_information_title}
              style={{ color: 'white' }}
            >
              We are a modern electronics and home appliances store Apple. Here
              you can buy smartphones, tablets, smart watches and bracelets,
              cameras, objects, set-top boxes, TVs and other home goods from
              Apple at the best prices.
            </p>
          ) : (
            <p className={Style.add_information_title}>
              We are a modern electronics and home appliances store Apple. Here
              you can buy smartphones, tablets, smart watches and bracelets,
              cameras, objects, set-top boxes, TVs and other home goods from
              Apple at the best prices.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
