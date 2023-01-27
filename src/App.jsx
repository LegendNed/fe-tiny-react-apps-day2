import { useState } from "react";
import "./App.css";

import ShoppingList from "./components/ShoppingList";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);

  function addItem(item) {
    if (cart.findIndex((i) => i.id === item.id) !== -1) {
      let newCart = cart.filter((i) => i.id !== item.id);
      return setCart(newCart);
    }

    let newCart = [...cart, item];
    return setCart(newCart);
  }

  return (
    <div className="App">
      <h1>Ked's Threads</h1>
      <div className="divider">
        <ShoppingList addItem={addItem} />
        <Cart data={cart}/>
      </div>
    </div>
  );
}

export default App;
