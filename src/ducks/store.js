import {createStore} from 'redux'

const initialState = {
    name: '',
    price: '',
    description: '',
    img: ''
}


export const UPDATENAME = 'UPDATENAME';
export const UPDATEPRICE = 'UPDATEPRICE';
export const UPDATEDESCRIPTION = 'UPDATEDESCRIPTION';
export const UPDATEIMAGE = 'UPDATEIMAGE';


function reducer(state = initialState, action){
    switch(action.type){
        case UPDATENAME:
            return {
                ...state,
                name: action.payload
            }
        case UPDATEPRICE:
            return {
                ...state,
                price: action.payload
            }
        case UPDATEDESCRIPTION:
            return {
                ...state,
                description: action.payload
            }
        case UPDATEIMAGE:
            return {
                ...state,
                img: action.payload
            }
        default: return state
    }
}

export default createStore(reducer);