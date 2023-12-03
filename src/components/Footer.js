import {
  FaFacebook,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import "./Footerstyle.css";

import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>A 204 shree Heeena Avenue.</p>
              <p>Mumbai.</p>
            </div>
          </div>

          <div className="phone">
            <h4>
              {" "}
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              937226328
            </h4>
          </div>

          <a href="https://mail.google.com/mail/u/1/#inbox">
            <div className="email">
              <h4>
                {" "}
                <FaMailBulk
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
                hasibsiddiqui111@gmail.com
              </h4>
            </div>
          </a>
        </div>

        <div className="right">
          <h4>Objective</h4>
          <p>
            highly organized and hard-working individual looking for a entry
            level opportunity as a frontend developer responsible position to
            gain practical experience.
          </p>
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <a href="https://www.linkedin.com/in/siddiqui-hasib-ba06a2258/">
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>

            <a href="https://twitter.com/home">
              <FaTwitter
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
