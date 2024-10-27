import axios from "axios";
import "./ProductCategoru.scss";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FilterProducts } from "../../page/filterProducts/FilterProducts";

export const ProductCategory = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [selectedItem, setSelectedItem] = useState("shirts");
  let test;
  const param = useParams();
  let filterBy;
  // console.log(param.category);

  const getProducts = async (link) => {
    try {
      let myResponse = await axios.get(link);
      setAllProducts(myResponse?.data);
      // console.log(myResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  const filterProducts = (checkboxValue) => {
    if (param.category === "men") {
      if (checkboxValue === "shirts") {
        getProducts("https://dummyjson.com/c/3b6e-8285-4ac0-bf6d");
      } else if (checkboxValue === "Jackets") {
        getProducts();
      } else if (checkboxValue === "hat") {
        getProducts("https://dummyjson.com/c/b27c-1138-4efd-9e98");
      } else if (checkboxValue === "shoses") {
        getProducts("https://dummyjson.com/c/0409-645d-405e-aacd");
      }
    }
    if (param.category === "woman") {
      if (checkboxValue === "shirts") {
        getProducts("https://dummyjson.com/c/5415-fa8b-451f-b250");
      } else if (checkboxValue === "Jackets") {
        getProducts();
      } else if (checkboxValue === "hat") {
        getProducts("https://dummyjson.com/c/3e2d-e47d-4a87-86e1");
      } else if (checkboxValue === "shoses") {
        getProducts("https://dummyjson.com/c/0409-645d-405e-aacd");
      }
    }
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setSelectedItem(checked ? value : "");
    filterProducts(value);

    console.log(value);
    console.log("selectedItem :", selectedItem);
  };

  useEffect(() => {
    if (param.category === "woman") {
      getProducts("https://dummyjson.com/c/5415-fa8b-451f-b250");
    } else if (param.category === "men") {
      getProducts("https://dummyjson.com/c/3b6e-8285-4ac0-bf6d");
    } else if (param.category === "shoses") {
      getProducts("https://dummyjson.com/c/0409-645d-405e-aacd");
    } else if (param.category === "children") {
      getProducts("https://dummyjson.com/c/df38-baf7-4c19-a834");
    } else if (param.category === "hat") {
      getProducts("https://dummyjson.com/c/3e2d-e47d-4a87-86e1");
    }
    setSelectedItem("shirts");
  }, [param, filterBy]);

  return (
    <h2 className="productCategory">
      <div className="container">
        <div className="wrapper">
          <div className="leftSide">
            {(param.category === "men" ||
              param.category === "woman" ||
              param.category === "children") && (
              <>
                <h3>Product Category</h3>

                <div className="filterItem">
                  <input
                    value="shirts"
                    id="t-SHIRT"
                    type="checkbox"
                    checked={selectedItem === "shirts"}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="t-SHIRT">T-SHIRT</label>
                </div>

                <div className="filterItem">
                  <input
                    value="Jackets"
                    id="Jackets"
                    type="checkbox"
                    checked={selectedItem === "Jackets"}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="Jackets">Jacket</label>
                </div>

                <div className="filterItem">
                  <input
                    value="hat"
                    id="hat"
                    type="checkbox"
                    checked={selectedItem === "hat"}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="hat">Hat</label>
                </div>

                <div className="filterItem">
                  <input
                    value="shoses"
                    id="shoses"
                    type="checkbox"
                    checked={selectedItem === "shoses"}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="shoses">Shoes</label>
                </div>
              </>
            )}
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
                src="https://img.freepik.com/free-photo/stylish-young-woman-holding-money-cash-dollars-smiling-posing-satisfied-going-shopping-standing-beige-background_1258-122852.jpg?t=st=1729945659~exp=1729949259~hmac=757400c1c268bd114db048c2ce0d0f463fa44ec1104138f38896ef6b863a07cc&w=1380"
                alt=""
              />
            </div>
            <div className="filteredCards">
              {allProducts?.map((item, index) => (
                <Link
                  key={index}
                  to={`/product/${param.category}/${selectedItem}/${
                    index + 1
                  } `}
                >
                  <div key={item.id} className="images">
                    {item.images.length > 1 ? (
                      <>
                        <img className="img1" src={item?.images[0]} alt="" />
                        <img className="img2" src={item?.images[1]} alt="" />)
                      </>
                    ) : (
                      <img className="img" src={item?.images[0]} alt="" />
                    )}
                  </div>
                  <p className="proTitle">{item.title}</p>
                  <div className="price">
                    <del>{item.oldPrice} EGP</del>
                    <p>{item.currentPrice} EGP</p>
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
