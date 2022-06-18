import React, { useReducer } from 'react';
import ItemContext from './item-context';
let defaultState = { items: [], totalAmount: 0, totalPrice: 0 };
const reducer = (state, action) => {
  let updatedItems;
  let updatedTotalAmount;
  let UpdatedTotalPrice;
  if (action.type === 'ADD') {
    const initialAmount = action.item.amount;
    updatedTotalAmount = action.fromCart
      ? state.totalAmount + 1
      : state.items.reduce((currAmount, item) => {
          console.log('i.a: ' + item.amount + '  currAmount:' + currAmount);
          var d = currAmount + item.amount;
          //console.log( currAmount, item.amount);
          return d;
        }, initialAmount);

    const existingItemIndex = state.items.findIndex((item) => {
      return item.id === action.item.id;
    });
    const existingItem = state.items[existingItemIndex];
    let updatedItem;
    if (existingItem) {
      updatedItem = {
        ...existingItem,
        amount: action.fromCart
          ? existingItem.amount + 1
          : existingItem.amount + action.item.amount,
      };

      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItem = { ...state.item };
      updatedItems = state.items.concat(action.item);
    }

    UpdatedTotalPrice = updatedItems.reduce((currPrice, item) => {
      return currPrice + item.price * item.amount;
    }, 0);
  } else if (action.type === 'REMOVE') {
    updatedItems = [...state.items];
    const targetToRemove = updatedItems.findIndex((x) => {
      return x.id === action.id;
    });
    if (state.items[targetToRemove].amount > 1) {
      UpdatedTotalPrice = state.totalPrice - updatedItems[targetToRemove].price;
      updatedTotalAmount = state.totalAmount - 1;
      state.items[targetToRemove].amount -= 1;
    } else {
      UpdatedTotalPrice = state.totalPrice;
      updatedTotalAmount = state.totalAmount;
    }
  } else if (action.type === 'REMOVE-ITEM') {
    const selectedItem = state.items.find((x) => {
      return x.id === action.id;
    });
    const selecteItemTotalPrice = selectedItem.amount * selectedItem.price;
    const selectedItemIndex = state.items.indexOf(selectedItem);
    updatedItems = [...state.items];
    updatedItems.splice(selectedItemIndex, 1);
    updatedTotalAmount = state.totalAmount - selectedItem.amount;
    UpdatedTotalPrice = state.totalPrice - selecteItemTotalPrice;
  }

  return {
    items: updatedItems,
    totalAmount: updatedTotalAmount,
    totalPrice: UpdatedTotalPrice,
  };
};
const ItemProvider = (props) => {
  const [itemState, dispatchItem] = useReducer(reducer, defaultState);
  const addToBadgeHandler = (item, fromCart = false) => {
    dispatchItem({ type: 'ADD', item: item, fromCart: fromCart });
  };

  const removeFromBadgeHandler = (id) => {
    dispatchItem({ type: 'REMOVE', id: id });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchItem({ type: 'REMOVE-ITEM', id: id });
  };

  const itemContext = {
    items: itemState.items,
    addToBadge: addToBadgeHandler,
    removeFromBadge: removeFromBadgeHandler,
    removeItem: removeItemFromCartHandler,
    totalAmount: itemState.totalAmount,
    totalPrice: itemState.totalPrice,
  };

  return (
    <ItemContext.Provider value={itemContext}>
      {props.children}
    </ItemContext.Provider>
  );
};
export default ItemProvider;
