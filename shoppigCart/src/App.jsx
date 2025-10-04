import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./component/Navbar";
import Amazon from "./component/Amazon";
import Cart from "./component/Cart";

const App = () => {
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });
    const tempArr = [...cart]; // ✅ copy to avoid mutation
    tempArr[ind].amount += d;

    if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
    setCart(tempArr);
  };

  return (
    <>
      <Navbar size={cart.length} />

      <Routes>
       
        <Route path="/" element={<Amazon handleClick={handleClick} />} />

     
        <Route
          path="/cart"
          element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} />}
        />
      </Routes>

      {warning && <div className="warning">Item is already in the cart</div>}
    </>
  );
};

export default App;

