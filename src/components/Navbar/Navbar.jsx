import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { authContext } from "../../contexts/authContext";
import "./Navbar.css";
import { ADMIN_EMAIL } from "../../helpers/consts";

const Navbar = () => {
  const { currentUser } = useContext(authContext);
  console.log(currentUser);
  console.log(ADMIN_EMAIL);
  const NAV_ITEMS = [
    {
      title: "JEWELRY & WATCHES",
      link: "/jewelry&watches",
      id: 1,
    },

    {
      title: "NEWS",
      link: "/news",
      id: 3,
    },
    {
      title: "STORES",
      link: "/stores",
      id: 4,
    },
    {
      title: "ORDERS",
      link: "/orders",
      id: 5,
    },
  ];
  const location = useLocation();
  return (
    <div className="navbar" style={{ textDecoration: "none" }}>
      {NAV_ITEMS.map((item) => (
        <Link
          style={{ textDecoration: "none" }}
          className={
            location.pathname === item.link
              ? "navbar-item-active"
              : "navbar-item"
          }
          key={item.id}
          to={item.link}
        >
          {item.title}
        </Link>
      ))}
      {currentUser === ADMIN_EMAIL ? (
        <Link
          style={{ textDecoration: "none" }}
          to="/admin"
          className={
            location.pathname === "/admin"
              ? "navbar-item-active"
              : "navbar-item"
          }
        >
          ADMIN
        </Link>
      ) : null}
    </div>
  );
};

export default Navbar;
