import { Button, Carousel } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { cartContext } from "../../contexts/cartContext";
import { jewelryContext } from "../../contexts/jewelryContext";
import Loading from "../Loading/Loading";

const Details = () => {
  const { getOneJewelry, oneJewelry } = useContext(jewelryContext);
  const { addProductToCart, checkItemInCart } = useContext(cartContext);

  const params = useParams();
  const [checkItem, setCheckItem] = useState(checkItemInCart(params.id));
  //   console.log(params);
  useEffect(() => {
    getOneJewelry(params.id);
  }, []);
  //   console.log(oneJewelry);
  return oneJewelry ? (
    <div className="container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div style={{ width: "35vw", marginTop: "60px", marginBottom: "60px" }}>
          <Carousel autoplay>
            <div>
              <img width="100%" src={oneJewelry.image1} alt="" />
            </div>
            <div>
              <img width="100%" src={oneJewelry.image2} alt="" />
            </div>
          </Carousel>
        </div>
        <div style={{ width: "40vw" }}>
          <h2>{oneJewelry.model}</h2>

          <h2>{"$ " + oneJewelry.price}</h2>
          <Button
            onClick={() => {
              addProductToCart(oneJewelry);
              setCheckItem(checkItemInCart(oneJewelry.id));
            }}
            size="large"
            style={{ width: "40%", margin: "15px 0px", borderRadius: "10px" }}
          >
            {checkItem ? "remove from cart" : "Add to cart"}
          </Button>
          <Link to="/orders">
            <Button
              size="large"
              style={{
                width: "40%",
                margin: "15px 0px",
                borderRadius: "10px",
                marginLeft: "8px",
              }}
            >
              Buy now
            </Button>
          </Link>
          <div>{oneJewelry.description}</div>
        </div>
      </div>
      {/* <video src={oneJewelry.video} autoPlay loop muted width="100%"></video> */}
    </div>
  ) : (
    <Loading />
  );
};

export default Details;
