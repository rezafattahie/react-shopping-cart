import React from 'react';
import classes from './EmptyCart.module.css';

const EmptyCart = (props) => {
  return (
    <div>
      <div className={classes['empty-cart__content']}>
        <p>Your cart is empty.</p>
        <img
          src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/undefined/external-empty-cart-web-store-flaticons-lineal-color-flat-icons.png"
          alt="e-c"
        />
      </div>
      <div className={classes['empty-cart__action']}>
        <button
          style={{ direction: 'rtl' }}
          onClick={props.onClick}
          className={classes['empty-cart__action_close']}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default EmptyCart;
