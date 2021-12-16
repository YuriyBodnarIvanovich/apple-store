const CHNAGE_TITLE = 'CHNAGE_TITLE';
const CHNAGE_THEME = 'CHNAGE_THEME';

const intialState = {
    title: 'hello team!',

    user:{
        idUser: '',//id of user
        idAuth0:'',// id from Auth0
        name:'',// name of user
        email:'',// email user
        avatar:'',// photo of user
        cartList:[// корзинка
           {
                idCart: '1',//id of card 
                idProduct:'1',// id of product
                name:'Apple iPhone 13 Pro 128GB Gold',// name of product
                price:'38499',// price of product
                color:'#3399FF',// color of product
           }

        ],
        roles:[
            {
                role:'',// role of user  admin/seller/user
            }
        ],
    },

    themeMode: true
};
console.log(JSON.stringify(intialState.user))

const mainPageReducer= (state=intialState, action) =>{
    switch(action.type){
        case CHNAGE_TITLE:{
            return {
                ...state,
                title: action.title
            }
        }
        case CHNAGE_THEME:{
            return {
                ...state,
                themeMode: action.themeMode
            }
        }
        default:
            return state;
    }
}

export default mainPageReducer;