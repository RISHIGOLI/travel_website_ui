import React from "react";
import "./footer.css";
import image from "../../Assets/image.jpg";
import { FiSend } from "react-icons/fi";

const Footer = () => {
  return (
    <section className="footer">
      <div className="videoDiv">
        {/* replace below image with video in future */}
        <img src={image} alt="" />
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input type="text" placeholder="Enter email address" />
            <button className="btn flex" type="submit">
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
