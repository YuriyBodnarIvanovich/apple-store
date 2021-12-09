import { v4 as uuidv4 } from 'uuid';

const CHNAGE_TITLE = 'CHNAGE_TITLE';

const intialState = {
  goods: [
    {
      id: `${uuidv4()}`,
      name: 'Apple iPhone 13 Pro 128GB Gold',
      price: 38499,
      idAuthor: '',
      photo: [
        {
          color: '#3399FF',
          imgSrc: [
            'https://content1.rozetka.com.ua/goods/images/big/221208453.jpg',
            'https://content2.rozetka.com.ua/goods/images/big/221208602.jpg',
            'https://content2.rozetka.com.ua/goods/images/big/221018141.jpg',
          ],
        },
        {
          color: '#EAC85F',
          imgSrc: [
            'https://content1.rozetka.com.ua/goods/images/big/221194930.jpg',
            'https://content1.rozetka.com.ua/goods/images/big/221194966.jpg',
            'https://content.rozetka.com.ua/goods/images/big/221018890.jpg',
          ],
        },
      ],
      character: {
        screen: '2532x1170',
        processor: '',
        RAM: '8 ГБ',
        SSD: '',
        videoCard: '',
        remainder: '',
        internalMemory: '128 ГБ',
      },
    },
    {
      id: `${uuidv4()}`,
      name: 'Apple iPhone 11 Pro 128GB Gold',
      price: 24000,
      idAuthor: '',
      photo: [
        {
          color: 'red',
          imgSrc: [
            'https://content.rozetka.com.ua/goods/images/big/152740976.jpg',
            'https://content1.rozetka.com.ua/goods/images/big/152740998.jpg',
            'https://content2.rozetka.com.ua/goods/images/big/152740990.png',
          ],
        },
        {
          color: 'green',
          imgSrc: [
            'https://content.rozetka.com.ua/goods/images/big/37406402.jpg',
            'https://content.rozetka.com.ua/goods/images/big/37406410.png',
            'https://content2.rozetka.com.ua/goods/images/big/37406422.jpg',
          ],
        },
      ],
      character: {
        screen: '2532x1170',
        processor: '',
        RAM: '8 ГБ',
        SSD: '',
        videoCard: '',
        remainder: '',
        internalMemory: '128 ГБ',
      },
    },
    {
      id: `${uuidv4()}`,
      name: 'Apple iPhone Xr',
      price: 14999,
      idAuthor: '',
      photo: [
        {
          color: 'white',
          imgSrc: [
            'https://content2.rozetka.com.ua/goods/images/big/37421745.jpg',
            'https://content.rozetka.com.ua/goods/images/big/37421751.jpg',
            'https://content1.rozetka.com.ua/goods/images/big/37421766.jpg',
          ],
        },
        {
          color: 'black',
          imgSrc: [
            'https://content1.rozetka.com.ua/goods/images/big/37420602.jpg',
          ],
        },
        {
          color: 'red',
          imgSrc: [
            'https://content.rozetka.com.ua/goods/images/big/152770743.jpg',
          ],
        },
      ],
      character: {
        screen: '2532x1170',
        processor: '',
        RAM: '8 ГБ',
        SSD: '',
        videoCard: '',
        remainder: '',
        internalMemory: '128 ГБ',
      },
    },
    {
      id: `${uuidv4()}`,
      name: 'Apple iPhone 13 mini',
      price: 36999,
      idAuthor: '',
      photo: [
        {
          color: '#EA5FDF',
          imgSrc: [
            'https://content.rozetka.com.ua/goods/images/big/221275020.jpg',
            'https://content.rozetka.com.ua/goods/images/big/221275021.jpg',
            'https://content1.rozetka.com.ua/goods/images/big/221275023.jpg',
          ],
        },
        {
          color: 'blue',
          imgSrc: [
            'https://content2.rozetka.com.ua/goods/images/big/221275000.jpg',
            'https://content.rozetka.com.ua/goods/images/big/221275001.jpg',
            'https://content.rozetka.com.ua/goods/images/big/221275003.jpg',
          ],
        },
      ],
      character: {
        screen: '2532x1170',
        processor: '',
        RAM: '8 ГБ',
        SSD: '',
        videoCard: '',
        remainder: '',
        internalMemory: '128 ГБ',
      },
    },
  ],
};

const goodsReducer = (state = intialState, action) => {
  switch (action.type) {
    case CHNAGE_TITLE: {
      return {
        ...state,
        title: action.title,
      };
    }
    default:
      return state;
  }
};

export default goodsReducer;
