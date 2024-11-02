import React, { useEffect, useState } from "react";
import "./WishList.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { NavBar } from "../navbar/NavBar";
export const WishList = () => {
  const [allProducts, setAllProducts] = useState([]);
  const getProducts = async (link) => {
    try {
      let myResponse = await axios.get(link);
      setAllProducts(myResponse?.data);
      // console.log(myResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  const checkIsCategoryHasType = (singlePro) => {
    if (
      singlePro.category === "men" ||
      singlePro.category === "woman" ||
      singlePro.category === "children"
    )
      return true;

    return false;
  };

  const wishList = useSelector((state) => state.wishList);
  // console.log(wishList);

  useEffect(() => {
    getProducts("https://dummyjson.com/c/4f8c-21a2-455b-83b4");
  }, []);
  return (
    <>
      <NavBar />
      <div className="wishList">
        <div className="wrapper">
          <h2>My Wish List</h2>

          <div className="allProducts">
            {wishList.products?.map((item, index) => (
              <Link
                key={index}
                to={`/product/${wishList.products[index].category}${
                  checkIsCategoryHasType(item)
                    ? "/" + wishList.products[index].type
                    : ""
                }/${item.id}`}
                className="singleProduct"
              >
                <div key={item.id} className="image">
                  <img className="img1" src={item?.images[0]} alt="" />
                </div>
                <p className="proTitle">{item.title}</p>
                <div className="price">
                  <del>{item.oldPrice} EGP</del>
                  <p>{item.currentPrice} EGP</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
