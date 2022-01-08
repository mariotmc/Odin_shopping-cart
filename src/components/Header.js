import React from "react";
import { Link } from "react-router-dom";
import logo from "../media/logo.png";
import cart from "../media/cart.png";

const Header = () => {
  return (
    <header>
      <nav>
        <Link id="logo" to="item-shop/">
          <img src={logo} alt="Logo" />
        </Link>
        <ul>
          <Link to="item-shop/">
            <li>Home</li>
          </Link>

          <Link to="item-shop/shop">
            <li>Shop</li>
          </Link>

          <Link to="item-shop/contact">
            <li>Contact</li>
          </Link>

          <li>
            <div id="cart-image-container">
              <img id="cart-image" src={cart} alt="Cart" />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
