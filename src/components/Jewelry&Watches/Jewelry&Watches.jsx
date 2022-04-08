// import React, { useContext, useState } from "react";
// import { Button, Card, Empty } from "antd";
// import { myCollection } from "./ProductsDb";
// import { Carousel } from "antd";
// import ProductCard from "../Jewelry&Watches/ProductCard";
// import { jewelryContext } from "../../contexts/jewelryContext";
// import { HeartOutlined, ShoppingOutlined } from "@ant-design/icons";
// import { cartContext } from "../../contexts/cartContext";

// const { Meta } = Card;

// const JewelryAndWatches = () => {
//   const { jewelry } = useContext(jewelryContext);

// const { addProductToCart, checkItemInCart } = useContext(cartContext);
// const [checkItem, setCheckItem] = useState(checkItemInCart(item.id));
// console.log(jewelry);

// const JewelryAndWatches = () => {
//   const { jewelry } = useContext(jewelryContext);

// return (
//   <div
//     style={{
//       display: "flex",
//       flexWrap: "wrap",
//       justifyContent: "space-around",
//       width: "100%",
//       margin: "40px auto",
//     }}
//   >
//     {myCollection.map((item) => (
//       <ProductCard key={item.id} item={item} />
//     ))}
//   </div>
// );
// };

// export default JewelryAndWatches;

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexWrap: "wrap",
//         justifyContent: "space-around",
//         width: "100%",
//         margin: "40px auto",
//       }}
//     >
//       {myCollection.map((item) => (
//         <ProductCard key={item.id} item={item} />
//         // <Card
//         //   key={item.id}
//         //   hoverable
//         //   style={{ width: "400px", margin: "5px ", border: "none" }}
//         //   cover={
//         //     <Carousel autoplay>
//         //       <div>
//         //         <img
//         //           style={contentStyle}
//         //           height="100%"
//         //           alt="example"
//         //           src={item.image1}
//         //         />
//         //       </div>
//         //       <div>
//         //         <img style={contentStyle} src={item.image2} />
//         //       </div>
//         //       <div>
//         //         <img style={contentStyle} src={item.image1} />
//         //       </div>
//         //       <div>
//         //         <img style={contentStyle} src={item.image2} />
//         //       </div>
//         //       <div>
//         //         <img style={contentStyle} src={item.image1} />
//         //       </div>
//         //     </Carousel>
//         //   }
//         // >
//         //   <Meta
//         //     style={{ textAlign: "center", color: "rgb(221, 212, 212);" }}
//         //     title={
//         //       <>
//         //         <h4>{item.model}</h4>
//         //       </>
//         //     }
//         //     description={
//         //       <>
//         //         <h3>{"$" + item.price}</h3>
//         //       </>
//         //     }
//         //   />

// // <Card
// //   key={item.id}
// //   hoverable
// //   style={{ width: "400px", margin: "5px ", border: "none" }}
// //   cover={
// //     <Carousel autoplay>
// //       <div>
// //         <img
// //           style={contentStyle}
// //           height="100%"
// //           alt="example"
// //           src={item.image1}
// //         />
// //       </div>
// //       <div>
// //         <img style={contentStyle} src={item.image2} />
// //       </div>
// //       <div>
// //         <img style={contentStyle} src={item.image1} />
// //       </div>
// //       <div>
// //         <img style={contentStyle} src={item.image2} />
// //       </div>
// //       <div>
// //         <img style={contentStyle} src={item.image1} />
// //       </div>
// //     </Carousel>
// //   }
// // >
// //   <Meta
// //     style={{ textAlign: "center", color: "rgb(221, 212, 212);" }}
// //     title={
// //       <>
// //         <h4>{item.model}</h4>
// //       </>
// //     }
// //     description={
// //       <>
// //         <h3>{"$" + item.price}</h3>
// //       </>
// //     }
// //   />

// //   {/* <div
// //     className="container"
// //     style={{
// //       display: "flex",
// //       alignItems: "center",
// //       justifyContent: "center",
// //     }}
// //   >
// //     <HeartOutlined style={{ margin: "10px", fontSize: "25px" }} />
// //     <ShoppingOutlined
// //       onClick={() => {
// //         addProductToCart(item);
// //         setCheckItem(checkItemInCart(item.id));
// //       }}
// //       style={{
// //         margin: "10px",
// //         fontSize: "25px",
// //         color: checkItem ? "red" : "black",
// //       }}
// //     />
// //     <Button style={{ margin: "10px", width: "150px" }}>
// //       Add to cart
// //     </Button>
// //   </div> */}
// // </Card>
