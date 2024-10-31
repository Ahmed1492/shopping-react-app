import React from "react";
import { Link } from "react-router-dom";

export const SortByPrice = ({
  allProducts,
  bgImages,
  param,
  truncateString,
  selectedItem,
  price,
  isSortByPriceMode,
}) => {
  let sortedProducts;
  if (isSortByPriceMode === "Price Hiest First") {
    sortedProducts = allProducts.sort(
      (a, b) => +b.currentPrice - +a.currentPrice
    );
  } else if (isSortByPriceMode === "Price Lowest First") {
    sortedProducts = allProducts.sort(
      (a, b) => +a.currentPrice - +b.currentPrice
    );
  }

  return (
    <div className="rightSide">
      <div className="image">
        <img className="image-filter" src={bgImages[param.category]} alt="" />
      </div>
      <div className="filteredCards">
        {sortedProducts?.map((item, index) => (
          <Link
            key={index}
            to={`/product/${param.category}/${selectedItem}/${index + 1}`}
          >
            <div key={item.id} className="images">
              {item.images.length > 1 ? (
                <>
                  <img className="img1" src={item?.images[0]} alt="" />
                  <img className="img2" src={item?.images[1]} alt="" />
                </>
              ) : (
                <img className="img" src={item?.images[0]} alt="" />
              )}
            </div>
            <p className="proTitle">{truncateString(item.title)}</p>
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
