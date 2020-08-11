
export const USER_DETAILS = 'USER_DETAILS'
export const ADD_ITEM = 'ADD_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const CLEAR_ITEM = 'CLEAR_ITEM'



export const loginDetails = login => ({
    type: USER_DETAILS,
    payload: {login}
})


export const addItem = cart => ({
    type: ADD_ITEM,
    payload: cart
})


export const removeItem = item => ({
    type: REMOVE_ITEM,
    payload: item
  });
  
  export const clearItemFromCart = item => ({
    type: CLEAR_ITEM,
    payload: item
  });
  