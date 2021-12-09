import React from 'react';
// import { useSelector } from 'react-redux';
import MainNotice from '../../components/HomeComponents/MainNotice/MainNotice';
import AboutUs from '../../components/HomeComponents/AboutUs/AboutUs';
import ShopAppleDevices from '../../components/HomeComponents/ShopAppleDevices/ShopAppleDevices';
import RecommendedProduct from '../../components/HomeComponents/RecommendedProduct/RecommendedProduct';
import Blog from '../../components/HomeComponents/Blog/Blog';
import ConnectingWithUs from '../../components/HomeComponents/ConnectingWithUs/ConnectingWithUs';

const Home = () => {
  // const title = useSelector((state) => state.MainPage.title);
  return (
    <>
      <MainNotice />
      <AboutUs />
      <ShopAppleDevices />
      <RecommendedProduct />
      <Blog />
      <ConnectingWithUs />
    </>
  );
};

export default Home;
