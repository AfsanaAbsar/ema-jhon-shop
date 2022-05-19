import React from 'react';
import { faArrowRight, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Cart.css'
const Cart = (props) => {
    return (
        <div>

            <h1>Order Summary</h1>
            <h3>Selected Items : {props.cart.length}</h3>
            <button className='clear-cart-btn'>Clear Cart  <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button><br />
            <button className='review-order-btn'>Review Order  <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>

        </div>
    );
};

export default Cart;