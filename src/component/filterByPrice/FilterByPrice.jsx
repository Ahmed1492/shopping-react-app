import React from "react";
import { Link } from "react-router-dom";
import "./FilterByPrice.scss";
export const FilterByPrice = ({
  allProducts,
  bgImages,
  param,
  truncateString,
  selectedItem,
  price,
}) => {
  const filteredProducts = allProducts?.filter(
    (product) => Number(product.currentPrice) <= Number(price)
  );
  return (
    <div className="rightSide">
      <div className="image">
        <img className="image-filter" src={bgImages[param.category]} alt="" />
      </div>
      <div className="filteredCards">
        {filteredProducts && filteredProducts.length > 0 ? (
          filteredProducts.map((item, index) => (
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
          ))
        ) : (
          <div className="emptyData">
            <p>
              No products available Match or Less than This Price ({price} EGP)
              .
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
