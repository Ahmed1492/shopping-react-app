import { useEffect, useState } from "react";
import { Card } from "../card/Card";
import "./FeaturedData.scss";
import axios from "axios";
export const FeaturedData = ({ type }) => {
  // const feturedData = [
  //     {
  //         id: 1,
  //         img1: "https://images.pexels.com/photos/1254041/pexels-photo-1254041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //         img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //         title: "Long Sleave Graphic T-shirt",
  //         isNew: true,
  //         oldPrice: 19,
  //         price: 12

  //     },
  //     {
  //         id: 2,
  //         img2: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //         img1: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //         title: "Coat",
  //         isNew: true,
  //         oldPrice: 19,
  //         price: 12

  //     },

  //     {
  //         id: 3,
  //         img1: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //         img2: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //         title: "skirt",
  //         isNew: true,
  //         oldPrice: 19,
  //         price: 12

  //     },

  //     {
  //         id: 4,
  //         img2: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //         img1: "https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //         title: "skirt",
  //         isNew: true,
  //         oldPrice: 19,
  //         price: 12

  //     },

  // ];

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_API_URL +
            `/products?populate=*&filters[type][$eq]=${type}`,
          {
            headers: {
              Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
            },
          }
        );
        setData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);
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
        {data.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};
