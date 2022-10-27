import  {ACTION_TYPE} from '../types/ActionType'

//setproduct
//fetchproduct

export const addToCart = (product) =>{
    return { type:ACTION_TYPE.ADD_TO_CART,payload:product }
}

export const removefromcart = (id)=>{
    return{
        type:ACTION_TYPE.REMOVE_FROM_CART,
        payload:id,
    }
}

