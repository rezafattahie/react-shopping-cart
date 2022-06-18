import React, { Fragment, useContext } from 'react';
import ItemForm from './ItemForm';
import ItemContext from '../../store/item-context';
import classes from './Items.module.css';

const dummyItems = [
  { id: 1, name: 'Product - 1', price: 12.75 },
  { id: 2, name: 'Product - 2', price: 18.5 },
  { id: 3, name: 'Product - 3', price: 20.25 },
  { id: 4, name: 'Product - 4', price: 11.99 },
  { id: 5, name: 'Product - 5', price: 17.75 },
  { id: 6, name: 'Product - 6', price: 19.99 },
];

const Items = (props) => {
  const itemCtx = useContext(ItemContext);
  const addItemToBadge = (inputContent, itemId) => {
    const selectedItem = dummyItems.find((x) => x.id === itemId);
    if (selectedItem) {
    }
    itemCtx.addToBadge({
      amount: inputContent,
      id: selectedItem.id,
      name: selectedItem.name,
      price: selectedItem.price,
    });
  };
  const items = dummyItems.map((item) => {
    return (
      <Fragment>
        <section>
          <li key={item.id} className={classes.item}>
            <div className={classes['item-content']}>
              <div className={classes['item-details']}>
                <p>{item.name}</p>
                <p>
                  ${item.price} <br />
                </p>
              </div>

              <ItemForm
                id={item.id}
                onAddToItems={addItemToBadge}
                items={dummyItems}
              />
            </div>
          </li>
        </section>
      </Fragment>
    );
  });
  return <ul className={classes.items}>{items}</ul>;
};
export default Items;
