import { Button, InputNumber, List } from "antd";
import React, { useContext, useEffect } from "react";

import { favoritesContext } from "../../contexts/favoritesContext";

const Favorites = () => {
  const { getFavorite, favorite, deleteFromFavorite, changeProductCountFav } =
    useContext(favoritesContext);

  useEffect(() => {
    getFavorite();
  }, []);
  //   console.log(favorite);

  return (
    <div
      className="container"
      style={{
        width: "80%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column-reverse",
      }}
    >
      <List
        itemLayout="horizontal"
        dataSource={favorite.jewelry}
        renderItem={(item) => (
          <List.Item
            extra={<img src={item.item.image1} alt="img" width={272} />}
          >
            <List.Item.Meta
              title={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginTop: "10px",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <h4>{item.item.model}</h4>
                  </div>
                  <h3>{"$" + item.item.price}</h3>
                </div>
              }
              description={
                <>
                  {/* <div>{item.item.description}</div> */}

                  <Button
                    style={{ marginTop: "50px" }}
                    onClick={() => deleteFromFavorite(item.item.id)}
                  >
                    Delete from favorite
                  </Button>
                </>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
};
export default Favorites;
