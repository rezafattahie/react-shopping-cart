import React from 'react';

const ItemContext = React.createContext({
  items: [],
  addToBadge: (item, fromCart = false) => {},
  removeFromBadge: (id) => {},
  removeItem: (id)=>{},
  totalAmount: 0,
  totalPrice: 0,
});

export default ItemContext;
