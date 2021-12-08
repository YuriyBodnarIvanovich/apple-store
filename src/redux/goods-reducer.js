import { v4 as uuidv4 } from 'uuid';


const CHNAGE_TITLE = 'CHNAGE_TITLE';

const intialState = {
    goods:[
        {
            id:`${uuidv4()}`,
            name:'Apple iPhone 13 Pro 128GB Gold',
            price:38499,
            idAuthor:'',
            photo:[
               {
                    color:'#3399FF',
                    imgSrc:[
                        'https://content1.rozetka.com.ua/goods/images/big/221208453.jpg',
                        'https://content2.rozetka.com.ua/goods/images/big/221208602.jpg',
                        'https://content2.rozetka.com.ua/goods/images/big/221018141.jpg',
                    ]
               },
               {
                color:'#EAC85F',
                imgSrc:[
                    'https://content1.rozetka.com.ua/goods/images/big/221194930.jpg',
                    'https://content1.rozetka.com.ua/goods/images/big/221194966.jpg',
                    'https://content.rozetka.com.ua/goods/images/big/221018890.jpg',
                ]
           }
            ],
            character:{
                screen:'2532x1170',
                processor:'',
                RAM:'8 ГБ',
                SSD:'',
                videoCard:'',
                remainder:'',
                internalMemory: '128 ГБ'
            }
        }
    ]
};

const goodsReducer= (state=intialState, action) =>{
    switch(action.type){
        case CHNAGE_TITLE:{
            return {
                ...state,
                title: action.title
            }
        }
        default:
            return state;
    }
}

export default goodsReducer;