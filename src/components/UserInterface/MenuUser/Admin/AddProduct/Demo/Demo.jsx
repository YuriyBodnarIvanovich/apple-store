import React, { useState } from 'react';
import Style from './Demo.module.css';
import { useSelector } from 'react-redux';
// import ModalProduct_Mac from '../../../../../CatalogOfGoods/ItemOfProductionMac/ModalProduct/ModalProduct';
// import IphoneModal from '../../../../../CatalogOfGoods/ItemOfProductIphone/ModalWindowOfProduct/IPhone/IphoneModal';
import IphoneModal from "../../../../../Goods/ItemOfProductIphone/ModalWindowOfProduct/IphoneModal";

const Demo = (props) => {
  const data = useSelector((state) => state.AdminPage);
  //   const dispatch = useDispatch();

  const [statusOfItem, setStatusOfItem] = useState(true);

  if (data.newElement[0].character.KindOfProduct === 'IPHONE') {
    const CharactersIphoneData = () => {
      return (
        <div className={Style.characters}>
          {data.newElement[0].character.screen !== '' ? (
            <p>
              <sub>Screen: {data.newElement[0].character.screen}</sub>
            </p>
          ) : null}
          {data.newElement[0].character.processor !== '' ? (
            <p>
              <sub>Processor: {data.newElement[0].character.processor}</sub>
            </p>
          ) : null}
          {data.newElement[0].character.RAM !== '' ? (
            <p>
              <sub>RAM: {data.newElement[0].character.RAM}</sub>
            </p>
          ) : null}
          {data.newElement[0].character.internalMemory !== '' ? (
            <p>
              <sub>
                Internal Memory: {data.newElement[0].character.internalMemory}
              </sub>
            </p>
          ) : null}
          {data.newElement[0].character.remainder !== null ? (
            <p>
              <sub>Remainder: {data.newElement[0].character.remainder}</sub>
            </p>
          ) : null}
          {data.newElement[0].character.camera.basicCamera !== '' ? (
            <p>
              <sub>
                Basic Camera: {data.newElement[0].character.camera.basicCamera}
              </sub>
            </p>
          ) : null}
          {data.newElement[0].character.camera.frontCamera !== '' ? (
            <p>
              <sub>
                Front Camera: {data.newElement[0].character.camera.frontCamera}
              </sub>
            </p>
          ) : null}
        </div>
      );
    };

    return statusOfItem ? (
      <div>
        <IphoneModal
          setStatusOfItem={setStatusOfItem}
          CharactersIphoneData={<CharactersIphoneData />}
          itemData={data.newElement[0]}
          name={data.newElement[0].name}
          photoData={data.newElement[0].photo}
          price={data.newElement[0].price}
          statusOfOpen={'admin'}
        />
      </div>
    ) : (
      <button>Restart</button>
    );
  } else if (data.newElement[0].character.KindOfProduct === 'MAC') {
    return (
      // <ModalProduct_Mac
      //   CharactersIphoneData={data.newElement[0].character}
      //   photo={data.newElement[0].photo[0].imgSrc[0]}
      //   price={data.newElement[0].price}
      //   catalogOfPhoto={data.newElement[0].photo}
      // />
      <></>
    );
  } else {
    return <h1>Sorry</h1>;
  }
};

export default Demo;
