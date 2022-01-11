import React, { useState, useCallback } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);
  const location = useLocation();

  const addToCart = useCallback((e) => {
    const itemID = Math.floor(Math.random() * 100000);
    const itemName = e.target.parentNode.children[1].textContent;
    const itemPrice = parseInt(e.target.parentNode.children[2].children[1].textContent);
    const itemImage = e.target.parentNode.children[0].src;
    const newItem = { key: itemID, name: itemName, price: itemPrice, image: itemImage, quantity: 1 };

    setCart((items) => [...items, newItem]);
  }, []);

  const isDuplicate = (e) => (cart) => {
    const itemName = e.target.parentNode.children[1].textContent;
    const newCart = [...cart].map((item) => {
      if (item.name === itemName) {
        const quantity = item.quantity;
        return { ...item, quantity: quantity + 1 };
      } else {
        return item;
      }
    });

    if (cart.length === 0) {
      addToCart(e);
    } else if (cart.length > 0) {
      cart.some((element) => element.name === itemName) ? setCart(newCart) : addToCart(e);
    }
  };

  const removeFromCart = (index) => {
    setCart((items) => [...items.slice(0, index), ...items.slice(index + 1)]);
  };

  const emptyCart = useCallback(() => {
    setCart([]);
  }, []);

  const incrementItemQuantity = (product, quantity) => {
    const newCart = [...cart].map((item) =>
      item.name === product.name ? { ...item, quantity: quantity + 1 } : item
    );
    setCart(newCart);
  };

  const decrementItemQuantity = (product, quantity) => {
    const index = cart.indexOf(product);

    if (quantity === 1) {
      removeFromCart(index);
    } else if (quantity > 1) {
      const newCart = [...cart].map((item) =>
        item.name === product.name ? { ...item, quantity: quantity - 1 } : item
      );
      setCart(newCart);
    }
  };

  const handleCartVisibility = useCallback((e) => {
    const cart = document.querySelector("#cart");
    cart.childNodes.forEach((element) => element.classList.add("cart-element"));
    const cartItems = document.querySelector("#cart-items");
    cartItems.childNodes.forEach((element) => element.classList.add("cart-element"));
    const buttons = document.querySelector("#buttons");
    buttons.childNodes.forEach((element) => element.classList.add("cart-element"));
    const closeCartButton = document.querySelector("#close-cart-button");
    closeCartButton.classList.remove("cart-element");
    const cartImage = document.querySelector("#cart-image");
    const cartImageContainer = document.querySelector("#cart-image-container");
    const body = document.querySelector("body");

    body.addEventListener("click", (e) => {
      e.stopImmediatePropagation();
      if (e.target === cartImage || e.target === cartImageContainer) {
        if (cart.classList.contains("cart-hidden")) {
          cart.classList.remove("cart-hidden");
          cart.classList.add("cart-visible");
        } else {
          cart.classList.remove("cart-visible");
          cart.classList.add("cart-hidden");
        }
      } else if (e.target.classList.contains("cart-element")) {
        return;
      } else if (!e.target.classList.contains("cart-element") && cart.classList.contains("cart-visible")) {
        cart.classList.remove("cart-visible");
        cart.classList.add("cart-hidden");
      }
    });
  }, []);

  const CartCounter = () => {
    let total = 0;
    if (cart.length > 0) {
      cart.map((element) => (total += element.quantity));
      return <div id="cart-counter">{total}</div>;
    } else {
      return null;
    }
  };

  return (
    <>
      <Header handleCartVisibility={handleCartVisibility} CartCounter={CartCounter} />
      <main>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/item-shop/" element={<Home />} />
            <Route path="/item-shop/shop" element={<Shop cart={cart} isDuplicate={isDuplicate} />} />
            <Route path="/item-shop/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        <Cart
          cart={cart}
          handleCartVisibility={handleCartVisibility}
          emptyCart={emptyCart}
          incrementItemQuantity={incrementItemQuantity}
          decrementItemQuantity={decrementItemQuantity}
        />
      </main>
    </>
  );
}

export default App;
