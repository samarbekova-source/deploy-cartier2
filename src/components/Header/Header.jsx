import React, { useContext, useEffect } from "react";
import "./Header.css";

import Navbar from "../Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import {
  HeartOutlined,
  LogoutOutlined,
  SearchOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { cartContext } from "../../contexts/cartContext";
import { Badge, Button } from "antd";
import { authContext } from "../../contexts/authContext";
import { favoritesContext } from "../../contexts/favoritesContext";

const Header = () => {
  const { getCart, cartLength } = useContext(cartContext);
  const { currentUser, handleLogOut } = useContext(authContext);
  const { favoriteLength } = useContext(favoritesContext);
  const navigate = useNavigate();
  useEffect(() => {
    getCart();
  }, []);
  return (
    <>
      <div className="container"></div>
      <div className="header">
        <div className="a-tags">
          <a href="#contact-us">CONTACT US</a>

          <a href="https://www.cartier.com/en-us/services.html" target="_blank">
            SERVICES
          </a>
        </div>

        <div className="logo-image">
          <Link to="/">
            <img
              id="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Cartier_logo.svg/1024px-Cartier_logo.svg.png"
              alt="cartier logo"
            />
          </Link>
        </div>
        <div
          className="icons"
          // style={{
          //   width: "200px",
          //   display: "flex",
          //   flexWrap: "wrap",
          //   justifyContent: "space-around",
          // }}
        >
          <Link to="favorites">
            <Badge count={+favoriteLength}>
              <HeartOutlined className="heart" />
            </Badge>
          </Link>

          <Link to="/cart">
            <Badge count={+cartLength}>
              <ShoppingOutlined className="shop" />
            </Badge>
          </Link>
          {currentUser ? (
            <span style={{ display: "flex", flexDirection: "column-reverse" }}>
              <h4
                style={{
                  fontWeight: "bold",
                  marginTop: "10px",
                  color: "grey",
                  marginLeft: "-160px",
                }}
              >
                {currentUser}
              </h4>
              <LogoutOutlined
                className="logout"
                onClick={handleLogOut}
                style={{
                  fontWeight: "bold",
                  marginTop: "40px",
                  color: "grey",
                  marginRight: "80px",
                }}
              />
            </span>
          ) : (
            <UserOutlined className="user" onClick={() => navigate("/auth")} />
          )}
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default Header;
