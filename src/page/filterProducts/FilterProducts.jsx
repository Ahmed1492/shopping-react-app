import React from "react";
import "./FilterProducts.scss";
import { Link } from "react-router-dom";
export const FilterProducts = ({ param, allProducts , getProducts }) => {
  console.log(param);

  const filterProducts = (checkboxValue) => {
    if (param.category === "men") {
      if (checkboxValue === "shirts") {
        getProducts("https://dummyjson.com/c/3b6e-8285-4ac0-bf6d");
      } else if (checkboxValue === "Jackets") {
        getProducts();
      } else if (checkboxValue === "hats") {
        getProducts("https://dummyjson.com/c/b27c-1138-4efd-9e98");
      } else if (checkboxValue === "Shoses") {
        getProducts("https://dummyjson.com/c/0409-645d-405e-aacd");
      }
    }
    if (param.category === "woman") {
      if (checkboxValue === "shirts") {
        getProducts("https://dummyjson.com/c/5415-fa8b-451f-b250");
      } else if (checkboxValue === "Jackets") {
        getProducts();
      } else if (checkboxValue === "hats") {
        getProducts("https://dummyjson.com/c/3e2d-e47d-4a87-86e1");
      } else if (checkboxValue === "Shoses") {
        getProducts("https://dummyjson.com/c/0409-645d-405e-aacd");
      }
    }
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    // filterProducts(value);


    console.log(value);
  };

  

  return (
    <div className="rightSide">
      <div className="image">
        <img
          src="https://img.freepik.com/free-photo/stylish-young-woman-holding-money-cash-dollars-smiling-posing-satisfied-going-shopping-standing-beige-background_1258-122852.jpg?t=st=1729945659~exp=1729949259~hmac=757400c1c268bd114db048c2ce0d0f463fa44ec1104138f38896ef6b863a07cc&w=1380"
          alt=""
        />
      </div>
      <div className="filteredCards">
        {allProducts?.map((item, index) => (
          <Link key={index} to={`/product/${param.category}/${index + 1} `}>
            <div key={item.id} className="images">
              {item.images.length > 1 ? (
                <>
                  <img className="img1" src={item?.images[0]} alt="" />
                  <img className="img2" src={item?.images[1]} alt="" />)
                </>
              ) : (
                <img className="img" src={item?.images[0]} alt="" />
              )}
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
  );
};
