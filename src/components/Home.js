import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import textLogo from "../media/text_logo.png";
import homeImage from "../media/home_image.jpg";

const Home = () => {
  return (
    <>
      <motion.div
        className="transition-animation-div"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        exit={{ opacity: 0 }}
      >
        <img id="home-logo" src={textLogo} alt="Logo" style={{ width: "300px", height: "auto" }} />
        <div id="home_heading-image-container">
          <div id="home_text-container">
            <h4 id="home-subheading">VOTED WORST COMPANY OF THE YEAR 2009-2021</h4>
            <h1 id="home-heading">Browse the finest items</h1>
            <p>
              All of our items are carefully crafted with balancing in mind. We strive to provide
              state-of-the-art equipment which will enable anyone to oneshot ADCs. Our combined experience of
              over 200 years allows us to produce the very best items while keeping competitive integrity in
              mind. Therefore we have been the industry leader for over 13 years when it comes to bad decision
              making.
            </p>
            <div id="home-quote">
              <p id="home-quote-text">"Very balanced items"</p>
              <p id="home-quote-author">- Warwick</p>
            </div>
          </div>
          <img id="home-image" src={homeImage} alt="" />
        </div>
        <Link to="/item-shop/shop">
          <button id="cta-button">SHOP NOW</button>
        </Link>
      </motion.div>
    </>
  );
};

export default Home;
