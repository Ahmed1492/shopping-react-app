import { useContext, useEffect, useState } from "react";
import "./Product.scss";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { MyContext } from "../../context/MyContext";

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

  const { setData } = useContext(MyContext);
  setData(param.type);

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
    if (param.category === "men") {
      if (param.type === "shirts") {
        getProducts("https://dummyjson.com/c/3b6e-8285-4ac0-bf6d");
      } else if (param.type === "Jackets") {
        getProducts("https://dummyjson.com/c/baef-4d4d-4af1-b815");
      } else if (param.type === "hat") {
        getProducts("https://dummyjson.com/c/b27c-1138-4efd-9e98");
      } else if (param.type === "shoses") {
        getProducts("https://dummyjson.com/c/1e1b-e1d6-47f8-b526");
      } else if (param.type === "accessories") {
        getProducts("https://dummyjson.com/c/931b-922a-4ee3-9c5e");
      } else if (param.type === "pullover") {
        getProducts("https://dummyjson.com/c/3fda-ad04-4d58-8ad6");
      }
    }
    if (param.category === "woman") {
      if (param.type === "shirts") {
        getProducts("https://dummyjson.com/c/5415-fa8b-451f-b250");
      } else if (param.type === "Jackets") {
        getProducts("https://dummyjson.com/c/6e51-2973-419b-931d");
      } else if (param.type === "hat") {
        getProducts("https://dummyjson.com/c/3e2d-e47d-4a87-86e1");
      } else if (param.type === "shoses") {
        getProducts("https://dummyjson.com/c/a939-0caa-4dce-acfd"); //k
      } else if (param.type === "accessories") {
        getProducts("https://dummyjson.com/c/0b52-c6b5-4df9-a10a");
      } else if (param.type === "pullover") {
        getProducts("https://dummyjson.com/c/510b-02e8-41cf-bb22");
      }
    }
    if (param.category === "children") {
      if (param.type === "shirts") {
        getProducts("https://dummyjson.com/c/df38-baf7-4c19-a834");
      } else if (param.type === "Jackets") {
        getProducts("https://dummyjson.com/c/0256-3a1c-4b10-92ca");
      } else if (param.type === "hat") {
        getProducts("https://dummyjson.com/c/2f5d-5618-46da-8ba8");
      } else if (param.type === "shoses") {
        getProducts("https://dummyjson.com/c/4f2a-8829-4a0e-b6c8");
      } else if (param.type === "accessories") {
        getProducts("https://dummyjson.com/c/3ec2-a926-4b41-9a4e");
      }
    }
    if (param.category === "accessories") {
      getProducts("https://dummyjson.com/c/11b5-d830-4fe4-9ffc");
    }
    if (param.category === "newSesson") {
      getProducts("https://dummyjson.com/c/f5de-ad6c-4768-ab18");
    }
    if (param.category === "sale") {
      getProducts("https://dummyjson.com/c/8b67-a14e-49eb-81d4");
    }
    if (param.category === "bags") {
      getProducts("https://dummyjson.com/c/f6e2-e4aa-461d-b0fd");
    }
  }, [param]);
  return (
    <div className="singleProduct">
      <div className="pagePath">
        product /<Link> {param.category} </Link> /
        <Link to={`/products/${param.category}`}>{param.type}</Link>/{" "}
        {allProducts.title}
      </div>
      <div className="container">
        <div className="left">
          <div className="sliderImage">
            <div className="images">
              {allProducts?.images?.map((img, index) => (
                <img
                  className={index === currentImage ? "selectedSmallImage" : ""}
                  src={img}
                  onClick={() => setCurrentImage(index)}
                  alt=""
                />
              ))}
            </div>
            <div className="mainImage">
              <img
                className={param.category === "accessories" && "imageContain"}
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
              <del>Price : {allProducts?.oldPrice} EGP</del>
              <span>Price :{allProducts?.currentPrice} EGP</span>
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
