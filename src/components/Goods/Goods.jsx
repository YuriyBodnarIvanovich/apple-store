import React, { useState, useEffect } from 'react';
import Style from './Goods.module.css';
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";
import { useSelector } from 'react-redux';
import ItemOfProductIphone from './ItemOfProductIphone/ItemOfProductIphone';
// import ItemOfMac from "../ItemOfProductionMac/ItemOfMac";

const Goods = () => {
  // const dataApple = useSelector(state=> state.ApplePage);
  const dataApple = true;
  const dataIphone = useSelector((state) => state.GoodsPage.goods);
  console.log(dataIphone);
  const dataMac = useSelector((state) => state.macPage);
  const themeMode = useSelector((state) => state.MainPage.themeMode);

    // const dispatch = useDispatch();

  // useEffect(() => {
  //     axios.get('/iPhone').then((response) => {
  //         let resData = JSON.parse(JSON.stringify(response.data));
  //         console.log("Iphone!");
  //         console.log(resData);
  //         dispatch({type: 'CHANGE_ARRAY', array: resData});
  //     })
  //         .catch(function (error) {
  //             console.log(error);
  //         });
  // },[]);

  useEffect(() => {
      axios.get('https://nameless-escarpment-09940.herokuapp.com/product?page=0&size=5').then((response) => {
          let resData = response;
          console.log("Mac page");
          console.log(resData);
          // dispatch({type:'PUT_ARRAY',newArray:resData});
      });
  }, []);

  const ErrorPage = () => {
    return (
      <div className={Style.none_product}>
        <h1>Sorry....</h1>
      </div>
    );
  };

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100000);

  console.log('dataIphone', dataIphone);
  const catalogOfIphone = dataIphone
    .filter((item) => item.price > minValue && item.price < maxValue)
    .map((item) => {
      return (
        <ItemOfProductIphone
          key={item.id}
          name={item.name}
          photo={item.photo[0].imgSrc[0]}
          character={item.character}
          price={item.price}
          photoData={item.photo}
        />
      );
    });

  const catalogOfMac = dataMac?.imgData
    .filter((item) => item.price > minValue && item.price < maxValue)
    .map((item) => {
      return <div></div>;
      // return <ItemOfMac name={item.name} photo={item.photo[0]} character={item.characters} price={item.price}
      //         catalogOfPhoto={item.photo}/>
    });

  const [value, setValue] = useState([0, 50000]);

  const useStyles = makeStyles({
    root: {
      width: '100%',
    },
  });
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (value[0] < value[1]) {
      setMinValue(value[0]);
    } else {
      setMaxValue(value[0]);
    }

    if (value[1] < value[0]) {
      setMinValue(value[1]);
    } else {
      setMaxValue(value[1]);
    }
  };

  const [titleOfMenu, setTitle] = useState('Iphone');
  const [statusOfMenu, setMenu] = useState(false);

  function setTitleOfMenu(name) {
    setTitle(name);
    setMenu(false);
  }

  const ShowIphone = () => {
    return catalogOfIphone?.length !== 0 ? (
      <div className={Style.catalog}>
        {titleOfMenu === 'Iphone' ? catalogOfIphone : null}
      </div>
    ) : (
      <ErrorPage />
    );
  };

  const ShowMac = () => {
    return catalogOfIphone.length !== 0 ? (
      <div className={Style.catalog}>
        {titleOfMenu === 'Mac' ? catalogOfMac : null}
      </div>
    ) : (
      <ErrorPage />
    );
  };

  const ShowAppleWatch = () => {
    return (
      <div>
        <h1>Apple Watch</h1>
      </div>
    );
  };

  return (
    <div
      className={`${
        themeMode ? Style.container_dark : Style.container
      }`}
    >
      <div className={Style.main}>
        {themeMode ? (
          <div className={Style.for_title}>
            <h1 style={{ color: 'white' }}>
              Catalog of Apple equipment and devices
            </h1>
            <p style={{ color: 'white' }}>
              Our catalog presents the official certified Apple equipment, on
              ready we give a guarantee of 5 years!
            </p>
          </div>
        ) : (
          <div className={Style.for_title}>
            <h1>Catalog of Apple equipment and devices</h1>
            <p>
              Our catalog presents the official certified Apple equipment, on
              ready we give a guarantee of 5 years!
            </p>
          </div>
        )}
        <div className={Style.options_container}>
          <div
            className={`${
              themeMode ? Style.options_dark : Style.options
            }`}
          >
            <div className={Style.for_title_in_options}>
              <samp
                onClick={() => {
                  setMenu(!statusOfMenu);
                }}
              >
                {titleOfMenu}
              </samp>
              {statusOfMenu ? (
                <div
                  className={`${
                    themeMode
                      ? Style.menu_type_of_product_dark
                      : Style.menu_type_of_product
                  }`}
                >
                  <samp
                    onClick={() => {
                      setTitleOfMenu('Iphone');
                    }}
                  >
                    Iphone
                  </samp>
                  <samp
                    onClick={() => {
                      setTitleOfMenu('Iphone');
                    }}
                  >
                    Mac
                  </samp>
                  <samp
                    onClick={() => {
                      setTitleOfMenu('Iphone');
                    }}
                  >
                    Apple Watch
                  </samp>
                </div>
              ) : null}
            </div>
            <div
              className={`${
                themeMode ? Style.for_search_dark : Style.for_search
              }`}
            >
              <input />
              {/*<img src="https://img.icons8.com/material-sharp/24/000000/search.png" alt={''}/>*/}
            </div>
            <div className={Style.for_range_container}>
              <div>
                <p>Price</p>
              </div>
              <div className={classes.root}>
                <Slider
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay='auto'
                  aria-labelledby='range-slider'
                  max={100000}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={Style.catalog_container}>
          {titleOfMenu === 'Iphone' ? <ShowIphone /> : null}
          {titleOfMenu === 'Mac' ? <ShowMac /> : null}
          {titleOfMenu === 'Apple Watch' ? <ShowAppleWatch /> : null}
        </div>
      </div>
    </div>
  );
};

export default Goods;
