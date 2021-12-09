import React, { useState } from 'react';
import Style from './MenuUser.module.css';
import { useDispatch } from 'react-redux';
import Card from './Card/Card';

const MenuUser = () => {
  // const data = useSelector((state) => state.ApplePage);
  const dispatch = useDispatch();

  const [showCard, setStatusOfCard] = useState(false);
  // const [showAdmin, setStatusOfAdmin] = useState(false);

  function exit() {
    dispatch({ type: 'CHANGE_STATUS_OF_USER', userStatus: false });
    localStorage.removeItem('token');
  }

  return (
    <div className={Style.container}>
      <p className={Style.items}>Info</p>
      <p
        className={Style.items}
        onClick={() => {
          setStatusOfCard(true);
        }}
      >
        Card
      </p>
      {showCard ? <Card setStatusOfCard={setStatusOfCard} /> : null}
      <p
        className={Style.items}
        onClick={() => {
          exit();
        }}
      >
        Exit
      </p>
    </div>
  );
};

export default MenuUser;
