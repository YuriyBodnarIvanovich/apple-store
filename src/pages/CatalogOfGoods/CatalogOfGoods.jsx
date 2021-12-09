import React from 'react';
import { useSelector } from 'react-redux';
import MainNotice from '../../components/HomeComponents/MainNotice/MainNotice';
import Goods from '../../components/Goods/Goods';

// import Style from './CatalogOfGoods.module.css';

const CatalogOfGoods = () => {
  const data = useSelector((state) => state.GoodsPage);
  // const dispatch = useDispatch();
  console.log(JSON.stringify(data));
  return (
    <div>
      <MainNotice />
      <Goods />
    </div>
  );
};

export default CatalogOfGoods;
