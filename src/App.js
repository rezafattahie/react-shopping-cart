import React, { useState } from 'react';
import Header from './Components/Layout/Header';
import Items from './Components/Items/Items';
import Cart from './Components/Cart/Cart';
import ItemProvider from './store/ItemProvider';
function App() {
  const [showCart, setShowCart] = useState(false);
  const showCartHandler = () => {
    setShowCart((state) => !state);
  };
  const hideCartHandler = () => {
    setShowCart(false);
  };
  return (
    <ItemProvider>
      <Header onClick={showCartHandler}/>
      {showCart && <Cart onClick={hideCartHandler} />}
      <Items />
    </ItemProvider>
  );
}

export default App;
