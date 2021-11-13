const CHNAGE_TITLE = 'CHNAGE_TITLE';

const intialState = {
    title: 'hello team!',
};

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