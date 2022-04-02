import React from "react";
import "./Footer.scss";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <h1>Neetflix Review</h1>
        <ul>
          <li>Home</li>
          <li>Tv Series</li>
          <li>Animation</li>
          <li>My List</li>
          <li>Help</li>
          <li>Reviewed</li>
        </ul>
      </div>
      <hr />
      <div className="footer-bottom">
        <p>
          © 2022 <span>Neetflix</span>. All rights reserved
        </p>
        <ul>
          <li>
            <AiOutlineInstagram className="footer-icon" />
          </li>
          <li>
            <AiOutlineFacebook className="footer-icon" />
          </li>
          <li>
            <AiOutlineTwitter className="footer-icon" />
          </li>
          <li>
            <AiOutlineYoutube className="footer-icon" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
