import React, { useRef } from 'react';
import Input from '../UI/Input'
import Augmenter from '../Augmenter/Augmenter';
import classes from './ItemForm.module.css';
const ItemForm = (props) => {
  const amountInputRef = useRef();
  const oneDecrement = () => {
    if (amountInputRef.current.value <= 1) {
      return;
    }
    amountInputRef.current.value -= 1;
  };
  const oneIncrement = () => {
    const enteredAmount = amountInputRef.current.value;
    let enteredAmountNum = +enteredAmount;
    if (enteredAmountNum >= 5) {
      return;
    }
    enteredAmountNum = enteredAmountNum + 1;
    amountInputRef.current.value = enteredAmountNum;
  };
  const addAmount = (event) => {
    event.preventDefault();
    const itemId = props.id;
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNum = +enteredAmount;
    props.onAddToItems(enteredAmountNum, itemId);
  };
  return (
    <div className={classes.form}>
      <form onSubmit={addAmount}>
        <div className={classes.Inputbox}>
          <div className={classes['btn-inc']} onClick={oneIncrement}>
            +
          </div>
          <Input
            ref={amountInputRef}
            input={{
              id: 'amount',
              type: 'number',
              min: '1',
              max: '5',
              step: '1',
              defaultValue: '1',
            }}
          />
          <div className={classes['btn-dec']} onClick={oneDecrement}>
            -
          </div>
        </div>

        <Augmenter />
      </form>
    </div>
  );
};

export default ItemForm;
