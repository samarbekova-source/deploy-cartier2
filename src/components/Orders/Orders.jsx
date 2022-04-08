import {
  BankOutlined,
  IdcardOutlined,
  MailOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Input } from "antd";
// // import React, { useState } from "react";
import Cards from "react-credit-cards";

import { Button } from "antd";
import { useState } from "react";
import "react-credit-cards/es/styles-compiled.css";
import "../Orders/Orders.css";
// import { Link } from "react-router-dom";
import OrdersModal from "./OrdersModal";

const Orders = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [data, setData] = useState({
    cvc: "",
    expiry: "",
    name: "",
    number: "",
  });
  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="main">
        <div className="billing_adress">
          <h2>Billing Address</h2>

          <div className="bills">
            <UserOutlined style={{ marginBottom: "8px", fontSize: "20px" }} />
            <h3 style={{ marginLeft: "10px" }}>Full name</h3>
          </div>
          <Input
            style={{ marginBottom: "5px" }}
            type="text"
            id="fname"
            name="firstname"
            placeholder="Colin M. Doe"
          ></Input>

          <div className="bills">
            <MailOutlined style={{ marginBottom: "8px", fontSize: "20px" }} />
            <h3 style={{ marginLeft: "10px" }}> Email</h3>
          </div>
          <Input
            style={{ marginBottom: "5px" }}
            type="text"
            id="email"
            name="email"
            placeholder="colin@example.com"
          ></Input>
          <div className="bills">
            <IdcardOutlined style={{ marginBottom: "8px", fontSize: "20px" }} />
            <h3 style={{ marginLeft: "10px" }}>Address</h3>
          </div>
          <Input
            style={{ marginBottom: "5px" }}
            type="text"
            id="address"
            name="address"
            placeholder="542 W. 15th Street"
          ></Input>
          <div className="bills">
            <BankOutlined style={{ marginBottom: "8px", fontSize: "20px" }} />
            <h3 style={{ marginLeft: "10px" }}>City</h3>
          </div>
          <Input
            style={{ marginBottom: "5px" }}
            type="text"
            id="city"
            name="city"
            placeholder="New York"
          ></Input>
          <div className="bills">
            <h3 style={{ marginLeft: "10px" }}>Zip</h3>
          </div>
          <Input
            style={{ marginBottom: "5px" }}
            type="text"
            id="zip"
            name="zip"
            placeholder="10001"
          ></Input>
        </div>
        <div className="second" style={{ width: "40%" }}>
          <h2>Payment</h2>
          <div id="credit">
            <div className="wrapper">
              <div id="PaymentForm">
                <Cards
                  cvc={data.cvc}
                  expiry={data.expiry}
                  focus={data.focus}
                  name={data.name}
                  number={data.number}
                />
                <form
                  action=""
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Input
                    style={{
                      width: "90%",
                      marginBottom: "15px",
                      marginTop: "10px",
                    }}
                    type="number"
                    name="cvc"
                    placeholder="CVC"
                    onChange={handleInputChange}
                  />

                  <Input
                    style={{ width: "90%", marginBottom: "15px" }}
                    type="date"
                    name="expiry"
                    placeholder="Expire Date"
                    onChange={handleInputChange}
                  />
                  <Input
                    style={{ width: "90%", marginBottom: "15px" }}
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    onChange={handleInputChange}
                  />
                  <Input
                    style={{ width: "90%" }}
                    type="number"
                    name="number"
                    placeholder="Card Number"
                    onChange={handleInputChange}
                  />
                  {/* <Link to="/ordersmodal"> */}
                  <Button
                    onClick={() => setIsModalVisible(true)}
                    style={{ margin: "20px 0", width: "250px" }}
                  >
                    Order
                  </Button>
                  {/* </Link> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OrdersModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </>
  );
};

export default Orders;
