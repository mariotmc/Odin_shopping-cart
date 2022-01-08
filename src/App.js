import React, { useState, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Contact from "./components/Contact";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = useCallback((e) => {
    const itemName = e.target.parentNode.children[1].textContent;
    const itemPrice = parseInt(e.target.parentNode.children[2].children[1].textContent);
    setCart((items) => [...items, { name: itemName, price: itemPrice }]);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop cart={cart} addToCart={addToCart} />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
