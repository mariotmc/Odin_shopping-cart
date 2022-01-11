import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import coin from "../media/coin.png";

const Shop = (props) => {
  const [itemsArray, setitemsArray] = useState(() => []);
  const isDuplicate = props.isDuplicate;

  const fetchItems = async () => {
    const request = await fetch("https://ddragon.leagueoflegends.com/cdn/12.1.1/data/en_US/item.json");
    const response = await request.json();
    const items = await response.data;
    const convertedArray = Object.entries(items);
    setitemsArray(convertedArray);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <>
      <motion.div
        className="transition-animation-div"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        exit={{ opacity: 0 }}
      >
        <div className="items">
          {itemsArray
            .sort((a, b) => a[1].gold.total - b[1].gold.total)
            .map((element) => {
              if (element[1].gold.total >= 2300 && element[1].gold.total < 3700) {
                return (
                  <div key={element[0]} className="item">
                    <img
                      className="item-image"
                      src={`https://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/${element[1].image.full}`}
                      alt="Item"
                    />
                    <h4 className="item-title">{element[1].name}</h4>
                    <div className="item-price-container">
                      <img className="gold-sack" src={coin} alt="Gold" />
                      <p className="item-price">{element[1].gold.total}</p>
                    </div>
                    <button className="item-cart-button" onClick={(e) => isDuplicate(e)(props.cart)}>
                      Add to Cart
                    </button>
                  </div>
                );
              }
            })}
        </div>
      </motion.div>
    </>
  );
};

export default Shop;
