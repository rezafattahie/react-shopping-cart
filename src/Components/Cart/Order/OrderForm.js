import React, { useRef } from 'react';
//import Input from '../../UI/Input';
import classes from './OrderForm.module.css';

const OrderForm = (props) => {
  const inputRefName = useRef();
  const inputRefTel = useRef();
  const inputRefEmail = useRef();
  const inputRefAddress = useRef();
  const inputRefZip = useRef();
  // const name = inputRefName.current.value;
  return (
    <section className={classes['order-form']}>
      <div className={classes['order-inputs-box']}>
        <div>
          <input ref={inputRefName} type="text" required="required" />
          <span className={classes.name}>Name</span>
        </div>
        <div>
          <input ref={inputRefTel} type="text" required="required" />
          <span className={classes.tel}>Tel</span>
        </div>
        <div>
          <input ref={inputRefEmail} type="email" required="required" />
          <span className={classes.tel}>E-MAIL</span>
        </div>
        <div>
          <input ref={inputRefAddress} type="text" required="required" />
          <span className={classes.adress}>Address</span>
        </div>
        <div>
          <input ref={inputRefZip} type="text" required="required" />
          <span className={classes.adress}>ZIP CODE</span>
        </div>
      </div>
      <div className={classes['order-form__actions']}>
        <button
          onClick={props.onBackToCart}
          className={classes['order-form__actions-close']}
        >
          close
        </button>
        <button className={classes['order-form__actions-ok']}>Send</button>
      </div>
    </section>
  );
};

export default OrderForm;
