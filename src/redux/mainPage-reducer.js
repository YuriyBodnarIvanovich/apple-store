const CHNAGE_TITLE = 'CHNAGE_TITLE';

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
                idCart: '',//id of card 
                idProduct:'',// id of product
                name:'',// name of product
                price:'',// price of product
                color:'',// color of product
           }

        ],
        roles:[
            {
                role:'',// role of user  admin/seller/user
            }
        ],
    }
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
        default:
            return state;
    }
}

export default mainPageReducer;