import { Empty, Input, Pagination } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { jewelryContext } from "../../contexts/jewelryContext";
import Filters from "../Filters/Filters";
import ProductCard from "../Jewelry&Watches/ProductCard";

const ProductsList = () => {
  const { getJewelry, jewelry, productsCount } = useContext(jewelryContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [searchValue, setSearchValue] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  const [model, setModel] = useState([]);
  const [price, setPrice] = useState([1, 1000000]);
  const [page, setPage] = useState(
    searchParams.get("_page") ? searchParams.get("_page") : 1
  );
  const [limit, setLimit] = useState(3);
  useEffect(() => {
    getJewelry();
  }, []);
  useEffect(() => {
    setSearchParams({
      q: searchValue,
      model: model,
      price_gte: price[0],
      price_lte: price[1],
      _page: page,
      _limit: limit,
    });
  }, [searchValue, model, price, page, limit]);
  useEffect(() => {
    getJewelry();
  }, [searchParams]);
  console.log(jewelry);
  return (
    <div className="container">
      <div className="products-search">
        <div
          style={{
            cursor: "pointer",
            width: "100%",
            marginTop: "30px",
            fontWeight: "300",
          }}
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? "HIDE FILTERS" : "SHOW FILTERS"}
        </div>
        <Input.Search
          placeholder="Search..."
          style={{ width: "25vw", marginTop: "30px" }}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      {showFilters ? (
        <Filters
          model={model}
          setModel={setModel}
          price={price}
          setPrice={setPrice}
        />
      ) : null}
      <div
        className="products-list"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          width: "100%",
          margin: "40px auto",
        }}
      >
        {jewelry.length > 0 ? (
          jewelry.map((item) => <ProductCard key={item.id} item={item} />)
        ) : (
          <Empty />
        )}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          total={+productsCount}
          current={+page}
          pageSize={+limit}
          defaultCurrent={1}
          onChange={(page, limit) => {
            setPage(page);
            setLimit(limit);
          }}
        />
      </div>
    </div>
  );
};

export default ProductsList;
