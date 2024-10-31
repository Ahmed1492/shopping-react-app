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
  const parsePrice = (price) => {
    return +price.trim().replace(/,/g, "");
  };

  const handleSort = () => {
    const sorted = [...allProducts];
    if (isSortByPriceMode === "Price Highest First") {
      sorted.sort(
        (a, b) => parsePrice(b.currentPrice) - parsePrice(a.currentPrice)
      );
    } else if (isSortByPriceMode === "Price Lowest First") {
      sorted.sort(
        (a, b) => parsePrice(a.currentPrice) - parsePrice(b.currentPrice)
      );
    }

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
