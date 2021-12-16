import React from 'react';
import NoticeStyle from './MainNotice.module.css';
import {useSelector} from "react-redux";

const MainNotice = () => {
  const data = false;
  const themeMode = useSelector((state) => state.MainPage.themeMode);


  return (
    <div className={NoticeStyle.content}>
      <div className={NoticeStyle.main}>
        <div>
          <p
            className={`${
              themeMode ? NoticeStyle.title_dark : NoticeStyle.title
            }`}
          >
            Certified products Apple <b>at an affordable price</b>
          </p>
          <p
            className={`${
              themeMode
                ? NoticeStyle.second_title_dark
                : NoticeStyle.second_title
            }`}
          >
            In our store you will find original Apple devices, original covers,
            and much more!
          </p>
        </div>
        <div className={NoticeStyle.container_for_button}>
          <button className={NoticeStyle.button_hot}>Hot deals</button>
        </div>
      </div>
    </div>
  );
};

export default MainNotice;
