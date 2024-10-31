import React, { useEffect, useState } from "react";
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
  const [sortedProducts, setSortedProducts] = useState([]);

  // Ensures all price values are parsed consistently to numbers
  const parsePrice = (price) => {
    return parseFloat(price.trim().replace(/,/g, ""));
  };

  const handleSort = () => {
    const sorted = [...allProducts].sort((a, b) => {
      const priceA = parsePrice(a.currentPrice);
      const priceB = parsePrice(b.currentPrice);

      // Handle sorting by comparing parsed numeric values
      if (isSortByPriceMode === "Price Highest First") {
        return +priceB - +priceA;
      } else if (isSortByPriceMode === "Price Lowest First") {
        return priceA - priceB;
      }

      return 0; // Default case if sort mode is invalid
    });

    setSortedProducts(sorted);
  };

  useEffect(() => {
    handleSort();
  }, [allProducts, isSortByPriceMode]);

  return (
    <div className="rightSide">
      <div className="image">
        <img className="image-filter" src={bgImages[param.category]} alt="" />
      </div>
      <div className="filteredCards">
        {sortedProducts?.map((item, index) => (
          <Link
            key={index}
            to={`/product/${param.category}/${selectedItem}/${item.id}`}
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
