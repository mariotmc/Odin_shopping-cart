import React, { useState, useEffect } from "react";
import coin from "../media/coin.png";

const Shop = (props) => {
  const [itemsArray, setitemsArray] = useState(() => []);
  const cart = props.cart;
  const addToCart = props.addToCart;

  const fetchItems = async () => {
    const request = await fetch("http://ddragon.leagueoflegends.com/cdn/12.1.1/data/en_US/item.json");
    const response = await request.json();
    const items = await response.data;
    const convertedArray = Object.entries(items);
    setitemsArray(convertedArray);
    handleClick();
  };

  const handleClick = () => {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((element) => element.addEventListener("click", addToCart));
  };

  useEffect(() => {
    fetchItems();
    console.log(cart);
    const buttons = document.querySelectorAll("button");
    return () => buttons.forEach((element) => element.removeEventListener("click", addToCart));
  }, [cart, addToCart]);

  return (
    <>
      <h1 id="shop-heading">Items</h1>
      <div className="items">
        {itemsArray
          .sort((a, b) => a[1].gold.total - b[1].gold.total)
          .map((element) => {
            if (element[1].gold.total >= 2300 && element[1].gold.total < 3700) {
              return (
                <div key={element[0]} className="item">
                  <img
                    className="item-image"
                    src={`http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/${element[1].image.full}`}
                    alt="Item"
                  />
                  <h4 className="item-title">{element[1].name}</h4>
                  <div className="item-price-container">
                    <img className="gold-sack" src={coin} alt="Gold" />
                    <p className="item-price">{element[1].gold.total}</p>
                  </div>
                  <button className="item-cart-button">Add to Cart</button>
                </div>
              );
            }
          })}
      </div>
    </>
  );
};

export default Shop;
