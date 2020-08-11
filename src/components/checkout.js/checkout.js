import React, {useState} from 'react'
import {connect} from 'react-redux';
import {Button} from 'react-bootstrap'
import './checkout.css';
import { createStructuredSelector } from 'reselect';

import {removeItem, clearItemFromCart, addItem} from '../../redux/actions';

import {
    selectCartItems,
    selectCartTotal
  } from '../../redux/selector';

const CheckOut = ({cartItems, addItem, removeItem, total}) => {

    const onPlaceOrder = () => {
    }

    const getUpdatedPrice = (quality, price) => {
        return quality * price
    }

    return(
        <div className="checkout-cls">
            {cartItems.map(cartItem => (
            <div className="row quality-cls">
            <div className="col-md-3">
                <img src={cartItem.image.url} className="img-cls"/>
            </div>

            <div className = "col-md-2">{cartItem.productName}</div>

                <div className="col-md-3">

            <span onClick={() => removeItem(cartItem)}>
            &#10094;
            
            </span>
            <span>{cartItem.quantity}</span>
            <span onClick={() => addItem(cartItem)}>&#10095;</span>

                </div>
            <span>{getUpdatedPrice(cartItem.quantity ,cartItem.price)}</span>

            </div>
      
                ))}


                <div className="row">
                <div className="col-md-3 offset-md-8">
                        <strong>{total}</strong>
                </div>
                </div>
                <div className="btn-cls">
                <Button className="primary" onClick={() => onPlaceOrder()}>Place Order</Button>
                </div>
        </div>
    )
}

// const mapStateToProps = state => ({
//     cartItems: state.cart
//   });



const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
  });
  

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);
