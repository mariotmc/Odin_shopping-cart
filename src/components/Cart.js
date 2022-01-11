import React from "react";
import { motion } from "framer-motion";
import coin from "../media/coin.png";

const Cart = (props) => {
  const cart = props.cart;
  const emptyCart = props.emptyCart;
  const incrementItemQuantity = props.incrementItemQuantity;
  const decrementItemQuantity = props.decrementItemQuantity;

  const getTotal = () => {
    let total = 0;
    cart.map((element) => {
      total += element.price * element.quantity;
    });
    return total;
  };

  return (
    <>
      <motion.div id="cart" className="cart-hidden cart-element">
        <h2 id="cart-heading">Your Cart</h2>
        <div id="cart-items">
          {cart.map((element) => {
            if (element.quantity > 0) {
              return (
                <div key={element.key} className="cart-item">
                  <div className="cart-item-image cart-element">
                    <img className="cart-element" src={element.image} alt="Item" />
                  </div>
                  <div className="cart-item-info cart-element">
                    <p className="cart-item-name cart-element">{element.name}</p>
                    <div className="cart-item-price cart-element">
                      <img className="cart-element" src={coin} alt="Gold" />
                      <p className="cart-item-text cart-element">{element.price}</p>
                    </div>
                    <div
                      className="cart-item-quantity-container cart-element"
                      style={{ display: "flex", justifyContent: "center", gap: "15px" }}
                    >
                      <button
                        className="quantity-button cart-element"
                        onClick={() => decrementItemQuantity(element, element.quantity)}
                      >
                        -
                      </button>
                      <p className="cart-item-quantity cart-element">{element.quantity}</p>
                      <button
                        className="quantity-button cart-element"
                        onClick={() => incrementItemQuantity(element, element.quantity)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
        <div id="cart-total">Total: {getTotal()}</div>
        <div id="buttons">
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer">
            <button id="checkout-button" className="button">
              Checkout
            </button>
          </a>
          <button id="empty-cart-button" className="button" onClick={emptyCart}>
            Empty Cart
          </button>
          <button id="close-cart-button" className="button">
            Close
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default Cart;
