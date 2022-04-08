// import { Input } from "antd";
// import React, { useContext, useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import { jewelryContext } from "../../contexts/jewelryContext";

// const Search = () => {
//   const { getJewelry } = useContext(jewelryContext);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [searchValue, setSearchValue] = useState(
//     searchParams.get("q") ? searchParams.get("q") : ""
//   );

//   useEffect(() => {
//     getJewelry();
//   }, []);
//   useEffect(() => {
//     setSearchParams({
//       q: searchValue,
//     });
//   }, [searchValue]);

//   useEffect(() => {
//     getJewelry();
//   }, [searchParams]);

//   return (
//     <div>
//       <Input.Search
//         placeholder="Search..."
//         style={{ width: "25vw" }}
//         value={searchValue}
//         onChange={(e) => setSearchValue(e.target.value)}
//       />
//     </div>
//   );
// };

// export default Search;
