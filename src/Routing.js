import Footer from "./components/Footer/Footer";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";

import News from "./components/News/News";
import Stores from "./components/Stores/Stores";
import AdminPage from "./pages/AdminPage";
import JewelryAndWatches from "./components/Jewelry&Watches/Jewelry&Watches";

import Cart from "./components/Cart/Cart";
import Details from "./components/Details/Details";
import Edit from "./components/Edit/Edit";
import ProductsList from "../src/components/ProductsList/ProductsList";

import Auth from "./components/Auth/Auth";
import Orders from "./components/Orders/Orders";
import Search from "antd/lib/transfer/search";
import Favorites from "./components/Favorites/Favorites";

const Routing = () => {
  let PUBLIC_ROUTES = [
    {
      link: "/",
      element: <MainPage />,
      id: 1,
    },
    // {
    //   link: "/jewelry&watches",
    //   element: <JewelryAndWatches />,
    //   id: 2,
    // },
    {
      link: "/news",
      element: <News />,
      id: 3,
    },
    {
      link: "/stores",
      element: <Stores />,
      id: 4,
    },
    {
      link: "/cart",
      element: <Cart />,
      id: 5,
    },
    {
      link: "/products/:id",
      element: <Details />,
      id: 6,
    },
    {
      link: "/jewelry&watches",
      element: <ProductsList />,
      id: 8,
    },

    { link: "/auth", element: <Auth />, id: 7 },
    {
      link: "/orders",
      element: <Orders />,
      id: 9,
    },
    {
      link: "/favorites",
      element: <Favorites />,
      id: 10,
    },
  ];

  let ADMIN_ROUTES = [
    {
      link: "/admin",
      element: <AdminPage />,
      id: 1,
    },
    {
      link: "/edit/:id",
      element: <Edit />,
      id: 2,
    },
  ];
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          {PUBLIC_ROUTES.map((item) => (
            <Route key={item.id} path={item.link} element={item.element} />
          ))}
          {ADMIN_ROUTES.map((item) => (
            <Route key={item.id} path={item.link} element={item.element} />
          ))}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Routing;
