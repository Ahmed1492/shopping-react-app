import "./ProductCategoru.scss";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
const feturedData = [
  {
    id: 1,
    img1: "https://images.pexels.com/photos/1254041/pexels-photo-1254041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Long Sleave Graphic T-shirt",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 2,
    img2: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img1: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Coat",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },

  {
    id: 3,
    img1: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "skirt",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },

  {
    id: 4,
    img2: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img1: "https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "skirt",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 5,
    img2: "https://images.pexels.com/photos/1254041/pexels-photo-1254041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img1: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Long Sleave Graphic T-shirt",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 6,
    img1: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img2: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Coat",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },

  {
    id: 7,
    img2: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img1: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "skirt",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },

  {
    id: 8,
    img1: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img2: "https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "skirt",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 9,
    img1: "https://images.pexels.com/photos/1254041/pexels-photo-1254041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Long Sleave Graphic T-shirt",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 10,
    img2: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img1: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Coat",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },

  {
    id: 11,
    img1: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "skirt",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },

  {
    id: 12,
    img2: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img1: "https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "skirt",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
];
export const ProductCategory = () => {
  const [maxPrice, setMaxPrice] = useState(1000);
  const param = useParams();
  return (
    <h2 className="productCategory">
      <div className="container">
        <div className="wrapper">
          <div className="leftSide">
            <h3>Product Category</h3>
            <div className="filterItem">
              <input value={1} id="1" type="checkbox" />
              <label htmlFor="1">hat</label>
            </div>
            <div className="filterItem">
              <input value={2} id="2" type="checkbox" />
              <label htmlFor="2">Shoses</label>
            </div>
            <div className="filterItem">
              <input value={3} id="3" type="checkbox" />
              <label htmlFor="3">t-SHIRT</label>
            </div>

            <h3>Filter By Price</h3>
            <label htmlFor="">0</label>
            <input
              min={0}
              max={1000}
              type="range"
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <label htmlFor="">{maxPrice}</label>

            <h3>Sorted By</h3>
            <div>
              <input value="Price Lowest First" name="price" type="radio" />
              <label>Price Lowest First</label>
            </div>
            <div>
              <input value="Price Hiest First" name="price" type="radio" />
              <label>Price Hiest First</label>
            </div>
          </div>

          <div className="rightSide">
            <div className="image">
              <img
                src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </div>
            <div className="filteredCards">
              {feturedData.map((item) => (
                <Link to="/product/1">
                  <div key={item.id} className="images">
                    <img className="img1" src={item.img1} alt="" />
                    <img className="img2" src={item.img2} alt="" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </h2>
  );
};
