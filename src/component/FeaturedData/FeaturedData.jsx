import axios from "axios";
import { Card } from "../card/Card";
import "./FeaturedData.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const FeaturedData = ({ type }) => {
  const [feturedData, setFeturedData] = useState([]);

  const getData = async (link) => {
    try {
      let myResponse = axios.get(link);
      setFeturedData((await myResponse).data);
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (type === "featured") {
      getData("https://dummyjson.com/c/5295-3a93-495f-84a1");
    } else if (type === "trending") {
      getData("https://dummyjson.com/c/eef5-3303-460c-8904");
    }
  });

  const handleShowAllProducts = () => {
    if (type === "featured") {
      navigate("/products/featured");
    } else if (type === "trending") {
      navigate("/products/trending");
    }
  };
  return (
    <div className="featuredData">
      <div className="container">
        <div className="text">
          <h2>{type}</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta et
            possimus nostrum nam velit atque, quisquam optio deleniti assumenda
            enim rem laboriosam molestias perferendis magni natus iste minima
            nulla quae.
          </p>
        </div>
      </div>
      <div className="card">
        {feturedData.map((item, index) => (
          <Card type={type} key={item.id} index={index} feturedData={item} />
        ))}
      </div>
      <div className="showAll">
        <button onClick={handleShowAllProducts}>Show All</button>
      </div>
    </div>
  );
};
