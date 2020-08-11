import { USER_DETAILS, ADD_ITEM, REMOVE_ITEM, CLEAR_ITEM } from './actions';
import { addItemToCart, removeItemFromCart } from './utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
  };

export const login = (state=[], action) => {

        switch(action.type) {
            case USER_DETAILS: {
                return state.concat(action.payload.login);
            }
            
            default:
            return state;
        }
}


export const cartReducer = (state=INITIAL_STATE, action) => {

    switch(action.type) {
        case ADD_ITEM:
        return {
          ...state,
          cartItems: addItemToCart(state.cartItems, action.payload)
        };
        case REMOVE_ITEM:
        return {
          ...state,
          cartItems: removeItemFromCart(state.cartItems, action.payload)
        };
      case CLEAR_ITEM:
        return {
          ...state,
          cartItems: state.cartItems.filter(
            cartItem => cartItem.id !== action.payload.id
          )
        };
        
        default:
        return state;
    }


}