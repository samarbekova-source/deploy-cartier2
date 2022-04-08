import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-a">
        <div className="contacts-a">
          <div id="customer">
            <h3>CUSTOMER CARE</h3>
            <p id="contact-us">CONTACT US</p>
            <p>CALL NOW: 800 227 8437</p>
            <p>FAQ</p>
            <p>CHECK ORDER</p>
          </div>

          <div id="company">
            <h3>OUR COMPANY </h3>
            <p>FIND A BOUTIQUE</p>
            <p>CAREERS</p>
          </div>

          <div id="legal">
            <h3>LEGAL AREA </h3>
            <p>TERMS OF USE PRIVACY POLICY</p>
            <p>CONDITIONS OF SALE</p>
          </div>
          <div>
            <h3>FOLOW US</h3>
            <a href="https://www.facebook.com/Cartier/" target="_blank">
              <FacebookOutlined
                style={{
                  margin: "10px",
                  fill: "black",
                  fontSize: "20px",
                }}
              />
            </a>
            <a
              style={{ margin: "10px" }}
              href="https://www.instagram.com/cartier/?utm_medium=copy_link"
              target="_blank"
            >
              <InstagramOutlined
                style={{
                  margin: "10px",
                  fill: "black",
                  fontSize: "20px",
                }}
              />
            </a>
            <a
              href="https://www.youtube.com/watch?v=GH9fT1jlJPU"
              target="_blank"
            >
              <YoutubeOutlined
                style={{
                  margin: "10px",
                  fill: "black",
                  fontSize: "20px",
                }}
              />
            </a>
            <a
              href="https://twitter.com/Cartier?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              target="_blank"
            >
              <TwitterOutlined
                style={{
                  margin: "10px",
                  fill: "black",
                  fontSize: "20px",
                }}
              />
            </a>
          </div>
        </div>

        <div className="linea"></div>

        <div className="footer-logos">
          <div>
            <img
              src="https://www.cartier.com/on/demandware.static/-/Library-Sites-CartierSharedLibrary-BGTJ/default/dw2ebd423e/CWI-Logo-black-424x190px.png"
              alt=""
              width="30%"
            />
          </div>
          <div>
            <img
              src="https://www.cartier.com/on/demandware.static/-/Library-Sites-CartierSharedLibrary-BGTJ/default/dw38c3e5f0/cartier_partner_logo_fondation.png"
              alt=""
              width="50%"
            />
          </div>

          <div>
            <img
              src="https://www.cartier.com/on/demandware.static/-/Library-Sites-CartierSharedLibrary-BGTJ/default/dw4de89d7c/cartier_partner_logo_philanthropy.png"
              alt=""
              width="50%"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
