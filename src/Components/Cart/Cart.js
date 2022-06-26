import React, { Fragment, useContext, useEffect, useState } from 'react';
import ItemContext from '../../store/item-context';
import EmptyCart from './EmptyCart';

import classes from './Cart.module.css';
const Cart = (props) => {
  const itemCtx = useContext(ItemContext);
  const [cartIsEmpty, setCartIsEmpty] = useState(false);
  useEffect(() => {
    if (itemCtx.totalAmount === 0) {
      setCartIsEmpty(true);
    } else {
      setCartIsEmpty(false);
    }
  }, [itemCtx.totalAmount]);

  const addItemHandler = (item) => {
    itemCtx.addToBadge(item, true);
  };
  const removeItemHandler = (id) => {
    itemCtx.removeFromBadge(id);
  };

  const removeItemFromListHandler = (id) => {
    itemCtx.removeItem(id);
  };

  const cartItems = itemCtx.items.map((item) => {
    const itemPrice = item.price * item.amount;
    return (
      <li key={item.id} className={classes.order}>
        <div className={classes['order__details']}>
          <span>{item.name}</span>
          <span>${item.price}</span>
          <span style={{ fontSize: 12, color: '#4CA771' }}>
            ${itemPrice.toFixed(2)}
          </span>
        </div>
        <div className={classes['order-box']}>
          <img
            onClick={() => {
              removeItemFromListHandler(item.id);
            }}
            className={classes['btn-del']}
            src="https://img.icons8.com/external-anggara-flat-anggara-putra/32/undefined/external-delete-ecommerce-anggara-flat-anggara-putra.png"
            alt="delete icon"
          />

          <div className={classes['order__actions']}>
            <button
              onClick={() => {
                addItemHandler(item);
              }}
              className={classes['btn-inc']}
            >
              +
            </button>
            <span>{item.amount}</span>
            <button
              onClick={() => {
                removeItemHandler(item.id);
              }}
              className={classes['btn-dec']}
            >
              -
            </button>
          </div>
        </div>
      </li>
    );
  });
  return (
    <Fragment>
      <div className={classes.backdrop}>
        <div className={classes.card}>
          {cartIsEmpty ? (
            <section>
              <EmptyCart onClick={props.onClick}/>
            </section>
          ) : (
            <section>
              <div style={{width:'100%'}}>
                <ul className={classes.orders}>{cartItems}</ul>
              </div>

              <div className={classes['total-price']}>
                <span className={classes['total-price__text']}>
                  Cart total price: ${itemCtx.totalPrice.toFixed(2)}
                </span>
                <div className={classes['total-price__actions']}>
                  <button
                    onClick={props.onClick}
                    className={classes['total-price__actions_close']}
                  >
                    Close
                  </button>
                  <button className={classes['total-price__actions_order']}>
                    Order
                  </button>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
      )
    </Fragment>
  );
};

export default Cart;
