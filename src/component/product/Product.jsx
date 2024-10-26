import { useEffect, useState } from "react";
import "./Product.scss";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
const images = [
  "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

  "https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

export const Product = () => {
  const [price, setPrice] = useState(19.9);
  const [totalPrice, setTotalPrice] = useState(price);
  const [currentImage, setCurrentImage] = useState(0);
  const [numOfProduct, setNumOfProduct] = useState(1);

  const param = useParams();

  const [allProducts, setAllProducts] = useState([]);

  const getMenProducts = async () => {
    try {
      let myResponse = await axios.get(
        "https://dummyjson.com/c/3b6e-8285-4ac0-bf6d"
      );
      setAllProducts(myResponse?.data[param.id - 1]);
      console.log(myResponse.data[0].images[0]);
      // setTotalPrice(allProducts.currentPrice);
    } catch (error) {
      console.log(error);
    }
  };
  const getProducts = async (link) => {
    try {
      let myResponse = await axios.get(link);
      setAllProducts(myResponse?.data[param.id - 1]);
      console.log(myResponse.data[0].images[0]);
      // setTotalPrice(allProducts.currentPrice);
    } catch (error) {
      console.log(error);
    }
  };

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

  useEffect(() => {
    if (param.category === "woman") {
      getProducts("https://dummyjson.com/c/5415-fa8b-451f-b250");
    } else if (param.category === "men") {
      getProducts("https://dummyjson.com/c/3b6e-8285-4ac0-bf6d");
    }
  }, [param]);
  return (
    <div className="singleProduct">
      <div className="container">
        <div className="left">
          <div className="sliderImage">
            <div className="images">
              {allProducts?.images?.map(
                (img, index) => (
                  <img
                    src={img}
                    onClick={() => setCurrentImage(index)}
                    alt=""
                  />
                )
                //  <img src={images[1]} onClick={() => setCurrentImage(1)} alt="" />
              )}
            </div>
            <div className="mainImage">
              <img
                src={allProducts.images && allProducts?.images[currentImage]}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="details">
            <h3>{allProducts.title}</h3>
            <div>
              <del>Price : ${allProducts?.oldPrice}</del>{" "}
              <span>Price : ${allProducts?.currentPrice}</span>{" "}
            </div>
            <p>{allProducts?.description}</p>
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
