import React from "react";
import facebookIcon from "../media/facebook-icon.png";
import twitterIcon from "../media/twitter-icon.png";
import instagramIcon from "../media/instagram-icon.png";
import redditIcon from "../media/reddit-icon.png";
import youtubeIcon from "../media/youtube-icon.png";
import phoneIcon from "../media/phone-icon.png";
import locationIcon from "../media/location-icon.png";
import websiteIcon from "../media/website-icon.png";

const Contact = () => {
  return (
    <>
      <h1 id="contact-heading">Don't Contact Us</h1>
      <h2>Riot Games</h2>
      <div id="company-contacts">
        <div className="company-contacts">
          <img className="contact-icon" src={locationIcon} alt="Location Icon" />
          The Last Drop, Undercity, Piltover
        </div>
        <div className="company-contacts">
          <img className="contact-icon" src={phoneIcon} alt="Phone Icon" />
          +1 234 567 890
        </div>
      </div>
      <div id="contact-social-media">
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
          <img className="social-icon" src={facebookIcon} alt="Facebook Icon" />
        </a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
          <img className="social-icon" src={instagramIcon} alt="Instagram Icon" />
        </a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
          <img className="social-icon" src={youtubeIcon} alt="YouTube Icon" />
        </a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
          <img className="social-icon" src={twitterIcon} alt="Twitter Icon" />
        </a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
          <img className="social-icon" src={redditIcon} alt="Reddit Icon" />
        </a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
          <img className="social-icon" src={websiteIcon} alt="Website Icon" />
        </a>
      </div>
    </>
  );
};

export default Contact;
