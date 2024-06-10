import { useState } from "react";
import "./Product.scss";
import { Link } from "react-router-dom";
const images = [
  "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

  "https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

export const Product = () => {
  const [price, setPrice] = useState(19.9);
  const [totalPrice, setTotalPrice] = useState(price);
  const [currentImage, setCurrentImage] = useState(0);
  const [numOfProduct, setNumOfProduct] = useState(1);

  function truncateDecimal(number, decimalPlaces) {
    const truncatedNumber = parseFloat(number.toFixed(decimalPlaces));
    return truncatedNumber;
  }
  const increaseProduct = () => {
    setNumOfProduct(numOfProduct < 100 ? numOfProduct + 1 : 100);
    numOfProduct > 0
      ? setTotalPrice(
          Math.abs(truncateDecimal(price + price * numOfProduct, 4))
        )
      : totalPrice === price
      ? setTotalPrice(price)
      : setTotalPrice(price);
  };
  const decreaseProduct = () => {
    setNumOfProduct(numOfProduct > 1 ? numOfProduct - 1 : 1);
    setTotalPrice(Math.abs(truncateDecimal(price - price * numOfProduct, 4)));
  };
  return (
    <div className="singleProduct">
      <div className="container">
        <div className="left">
          <div className="sliderImage">
            <div className="images">
              <img src={images[0]} onClick={() => setCurrentImage(0)} alt="" />
              <img src={images[1]} onClick={() => setCurrentImage(1)} alt="" />
            </div>
            <div className="mainImage">
              <img src={images[currentImage]} alt="" />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="details">
            <h3>Long Sleeve Graphic T-shirt</h3>
            <div>
              <span>Price : ${price}</span>{" "}
              <span>
                Total Price :${numOfProduct > 1 ? totalPrice : price}{" "}
              </span>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
              illo distinctio modi nulla aliquid eos, libero esse nam architecto
              temporibus odio ad corrupti, vitae rerum beatae expedita
              laudantium eligendi? Itaque consectetur adipisicing elit. Culpa
              illo distinctio modi nulla aliquid eos, libero esse nam architecto
              temporibus beatae expedita laudantium eligendi? Itaqu
            </p>
          </div>

          <div className="addToCart">
            <div className="add">
              <button onClick={increaseProduct}>+</button>
              <p>{numOfProduct}</p>
              <button
                onChange={() => setTotalPrice(price * numOfProduct)}
                onClick={decreaseProduct}
              >
                -
              </button>
            </div>

            <button className="addToCart">ADD TO CART</button>

            <div className="buyLater">
              <Link> ADD TO WISH LIST </Link>
              <Link> ADD TO FAVOURITE </Link>
            </div>
          </div>

          <div className="description">
            <div className="top">
              <p>Vendor : Polo</p>
              <p>Product Type : T-Shirt</p>
              <p>Tag : T-Shirt ,Women ,Top</p>
            </div>
            <div className="bottom">
              <span>DESCRIPTION</span>
              <span>ADDITIONAL INFORMATION</span>
              <p>FAQ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
