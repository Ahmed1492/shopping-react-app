import axios from "axios";
import "./ProductCategoru.scss";
import { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FilterProducts } from "../../page/filterProducts/FilterProducts";
import { NavBar } from "../navbar/NavBar";
import { MyContext } from "../../context/MyContext";
import { Footer } from "../Footer/Footer";
import { SortByPrice } from "../sortByPrice/SortByPrice";
import { FilterByPrice } from "../filterByPrice/FilterByPrice";

export const ProductCategory = () => {
  const { data } = useContext(MyContext);
  const [allProducts, setAllProducts] = useState([]);
  const [currentPrice, setCurrentPrice] = useState(500);
  const [isFilterByPriceMode, setIsFilterByPriceMode] = useState(false);
  const [isSortByPriceMode, setIsSortByPriceMode] = useState(null);
  const [selectedItem, setSelectedItem] = useState("shirts");
  const filterNavbarRef = useRef(null);
  const footerRef = useRef(null);
  const [isFixed, setIsFixed] = useState(true);
  const param = useParams();
  let filterBy;
  // console.log(param.category);

  console.log("selectedItem :: > ", selectedItem);

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
    setIsSortByPriceMode(null);
    setIsFilterByPriceMode(false);
    if (param.category === "men") {
      if (checkboxValue === "shirts") {
        getProducts("https://dummyjson.com/c/4f8c-21a2-455b-83b4");
      } else if (checkboxValue === "Jackets") {
        getProducts("https://dummyjson.com/c/baef-4d4d-4af1-b815");
      } else if (checkboxValue === "hat") {
        getProducts("https://dummyjson.com/c/b27c-1138-4efd-9e98");
      } else if (checkboxValue === "shoes") {
        getProducts("https://dummyjson.com/c/1e1b-e1d6-47f8-b526"); // k
      } else if (checkboxValue === "accessories") {
        getProducts("https://dummyjson.com/c/931b-922a-4ee3-9c5e");
      } else if (checkboxValue === "pullover") {
        getProducts("https://dummyjson.com/c/3fda-ad04-4d58-8ad6");
      }
    }
    if (param.category === "woman") {
      if (checkboxValue === "shirts") {
        getProducts("https://dummyjson.com/c/3297-b59b-4ea5-acc8");
      } else if (checkboxValue === "Jackets") {
        getProducts("https://dummyjson.com/c/6e51-2973-419b-931d");
      } else if (checkboxValue === "hat") {
        getProducts("https://dummyjson.com/c/3e2d-e47d-4a87-86e1");
      } else if (checkboxValue === "shoes") {
        getProducts("https://dummyjson.com/c/a939-0caa-4dce-acfd"); //k
      } else if (checkboxValue === "accessories") {
        getProducts("https://dummyjson.com/c/0b52-c6b5-4df9-a10a");
      } else if (checkboxValue === "pullover") {
        getProducts("https://dummyjson.com/c/510b-02e8-41cf-bb22");
      }
    }
    if (param.category === "children") {
      if (checkboxValue === "shirts") {
        getProducts("https://dummyjson.com/c/df38-baf7-4c19-a834");
      } else if (checkboxValue === "Jackets") {
        getProducts("https://dummyjson.com/c/0256-3a1c-4b10-92ca");
      } else if (checkboxValue === "hat") {
        getProducts("https://dummyjson.com/c/2f5d-5618-46da-8ba8");
      } else if (checkboxValue === "shoes") {
        getProducts("https://dummyjson.com/c/4f2a-8829-4a0e-b6c8");
      } else if (checkboxValue === "accessories") {
        getProducts("https://dummyjson.com/c/3ec2-a926-4b41-9a4e");
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

  function truncateString(str) {
    return str.length > 30 ? str.slice(0, 30) : str;
  }
  const handleScroll = () => {
    if (filterNavbarRef.current && footerRef.current) {
      const filterNavbarHeight = filterNavbarRef.current.offsetHeight;
      const footerTop = footerRef.current.getBoundingClientRect().top;

      // Check if the footer is close to the navbar
      if (footerTop <= filterNavbarHeight + 86) {
        setIsFixed(false); // Switch to absolute position
      } else {
        setIsFixed(true); // Keep fixed position
      }
    }
  };

  const handleFilterByPrice = (e) => {
    setCurrentPrice(e.target.value);
    setIsFilterByPriceMode(true);
    setIsSortByPriceMode(null);
  };

  const handleSortByPrice = (e) => {
    setIsFilterByPriceMode(false);
    setIsSortByPriceMode(e.target.value);
  };

  const bgImages = {
    men: "https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    woman:
      "https://img.freepik.com/free-photo/close-up-portrait-pretty-blonde-woman-wearing-straw-hat-boho-outfit_291049-100.jpg?t=st=1730213092~exp=1730216692~hmac=f613821c0f8ae8023d6dd11ca15e83b47f477c0f6bf78d528cb316700784a5a0&w=1380",
    children:
      "https://img.freepik.com/free-photo/group-beautiful-girls-boys-pastel-wall_155003-10578.jpg?t=st=1730214185~exp=1730217785~hmac=35b7c9d75036ed34d3e402271d5642bda4cfae79a91cc696a78b5b966028c0f9&w=1380",

    newSesson:
      "https://images.pexels.com/photos/3875430/pexels-photo-3875430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bags: "https://images.pexels.com/photos/2977304/pexels-photo-2977304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    sale: "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    accessories:
      "https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  };

  useEffect(() => {
    if (selectedItem === "undefined") {
      setSelectedItem("shirts");
    }
    if (param.category === "men") {
      getProducts("https://dummyjson.com/c/4f8c-21a2-455b-83b4");
    }
    if (param.category === "woman") {
      getProducts("https://dummyjson.com/c/3297-b59b-4ea5-acc8");
    }
    if (param.category === "children") {
      getProducts("https://dummyjson.com/c/df38-baf7-4c19-a834");
    }
    if (param.category === "accessories") {
      getProducts("https://dummyjson.com/c/11b5-d830-4fe4-9ffc");
    }
    if (param.category === "newSesson") {
      getProducts("https://dummyjson.com/c/7494-5008-4b89-9542");
    }
    if (param.category === "sale") {
      getProducts("https://dummyjson.com/c/05ec-cd4d-4d6d-bbda");
    }
    if (param.category === "bags") {
      getProducts("https://dummyjson.com/c/f6e2-e4aa-461d-b0fd");
    }

    if (data === "") {
      if (param.category === "men") {
        if (selectedItem === "shirts") {
          getProducts("https://dummyjson.com/c/4f8c-21a2-455b-83b4");
        } else if (selectedItem === "Jackets") {
          getProducts("https://dummyjson.com/c/baef-4d4d-4af1-b815");
        } else if (selectedItem === "hat") {
          getProducts("https://dummyjson.com/c/b27c-1138-4efd-9e98");
        } else if (selectedItem === "shoes") {
          getProducts("https://dummyjson.com/c/1e1b-e1d6-47f8-b526"); // k
        } else if (selectedItem === "accessories") {
          getProducts("https://dummyjson.com/c/931b-922a-4ee3-9c5e");
        } else if (selectedItem === "pullover") {
          getProducts("https://dummyjson.com/c/3fda-ad04-4d58-8ad6");
        }
      }
      if (param.category === "woman") {
        if (selectedItem === "shirts") {
          getProducts("https://dummyjson.com/c/3297-b59b-4ea5-acc8");
        } else if (selectedItem === "Jackets") {
          getProducts("https://dummyjson.com/c/6e51-2973-419b-931d");
        } else if (selectedItem === "hat") {
          getProducts("https://dummyjson.com/c/3e2d-e47d-4a87-86e1");
        } else if (selectedItem === "shoes") {
          getProducts("https://dummyjson.com/c/a939-0caa-4dce-acfd"); //k
        } else if (selectedItem === "accessories") {
          getProducts("https://dummyjson.com/c/0b52-c6b5-4df9-a10a");
        } else if (selectedItem === "pullover") {
          getProducts("https://dummyjson.com/c/510b-02e8-41cf-bb22");
        }
      }
      if (param.category === "children") {
        if (selectedItem === "shirts") {
          getProducts("https://dummyjson.com/c/df38-baf7-4c19-a834");
        } else if (selectedItem === "Jackets") {
          getProducts("https://dummyjson.com/c/0256-3a1c-4b10-92ca");
        } else if (selectedItem === "hat") {
          getProducts("https://dummyjson.com/c/2f5d-5618-46da-8ba8");
        } else if (selectedItem === "shoes") {
          getProducts("https://dummyjson.com/c/4f2a-8829-4a0e-b6c8");
        }
      }
      selectedItem == undefined
        ? setSelectedItem("shirts")
        : setSelectedItem((prev) => prev);
    } else {
      if (param.category === "men") {
        if (data === "shirts") {
          getProducts("https://dummyjson.com/c/4f8c-21a2-455b-83b4");
        } else if (data === "Jackets") {
          getProducts("https://dummyjson.com/c/baef-4d4d-4af1-b815");
        } else if (data === "hat") {
          getProducts("https://dummyjson.com/c/b27c-1138-4efd-9e98");
        } else if (data === "shoes") {
          getProducts("https://dummyjson.com/c/1e1b-e1d6-47f8-b526"); // k
        } else if (data === "accessories") {
          getProducts("https://dummyjson.com/c/931b-922a-4ee3-9c5e");
        } else if (data === "pullover") {
          getProducts("https://dummyjson.com/c/3fda-ad04-4d58-8ad6");
        }
      }
      if (param.category === "woman") {
        if (data === "shirts") {
          getProducts("https://dummyjson.com/c/3297-b59b-4ea5-acc8");
        } else if (data === "Jackets") {
          getProducts("https://dummyjson.com/c/6e51-2973-419b-931d");
        } else if (data === "hat") {
          getProducts("https://dummyjson.com/c/3e2d-e47d-4a87-86e1");
        } else if (data === "shoes") {
          getProducts("https://dummyjson.com/c/a939-0caa-4dce-acfd"); // k
        } else if (data === "accessories") {
          getProducts("https://dummyjson.com/c/0b52-c6b5-4df9-a10a");
        } else if (data === "pullover") {
          getProducts("https://dummyjson.com/c/510b-02e8-41cf-bb22");
        }
      }
      if (param.category === "children") {
        if (data === "shirts") {
          getProducts("https://dummyjson.com/c/df38-baf7-4c19-a834");
        } else if (data === "Jackets") {
          getProducts("https://dummyjson.com/c/0256-3a1c-4b10-92ca");
        } else if (data === "hat") {
          getProducts("https://dummyjson.com/c/2f5d-5618-46da-8ba8");
        } else if (data === "shoes") {
          getProducts("https://dummyjson.com/c/4f2a-8829-4a0e-b6c8");
        }
      }
      setSelectedItem(data);
    }
    window.addEventListener("scroll", handleScroll);

    selectedItem === "undefined" && setSelectedItem("shirts");

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [param.category, filterBy, data]);

  const checkIsCategoryHasType = () => {
    if (
      param.category === "men" ||
      param.category === "woman" ||
      param.category === "children"
    )
      return true;

    return false;
  };

  return (
    <>
      <NavBar />
      <div className="productCategory">
        <div className="container">
          <div className="wrapper">
            <div className="leftSide">
              <div
                ref={filterNavbarRef}
                style={{
                  position: isFixed ? "fixed" : "absolute",
                  top: isFixed ? "80px" : "auto",
                  bottom: isFixed ? "auto" : "20px", // Adjust this as needed
                }}
                className="allFilters"
              >
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
                    {(param.category === "men" ||
                      param.category === "woman") && (
                      <div className="filterItem">
                        <input
                          value="pullover"
                          id="pullover"
                          type="checkbox"
                          checked={selectedItem === "pullover"}
                          onChange={handleCheckboxChange}
                        />
                        <label htmlFor="pullover">pullover</label>
                      </div>
                    )}

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
                        value="shoes"
                        id="shoes"
                        type="checkbox"
                        checked={selectedItem === "shoes"}
                        onChange={handleCheckboxChange}
                      />
                      <label htmlFor="shoes">Shoes</label>
                    </div>

                    <div className="filterItem">
                      <input
                        value="accessories"
                        id="accessories"
                        type="checkbox"
                        checked={selectedItem === "accessories"}
                        onChange={handleCheckboxChange}
                      />
                      <label htmlFor="accessories">Accessories</label>
                    </div>
                  </>
                )}
                <h3>Filter By Price</h3>
                <label htmlFor="">100</label>
                <input
                  min={100}
                  max={4000}
                  type="range"
                  onChange={handleFilterByPrice}
                />
                <label htmlFor="">{currentPrice}</label>

                <h3>Sorted By</h3>
                <div>
                  <input
                    onClick={handleSortByPrice}
                    value="Price Lowest First"
                    name="price"
                    type="radio"
                    id="low price"
                  />
                  <label htmlFor="low price">Price Lowest First</label>
                </div>
                <div>
                  <input
                    onClick={handleSortByPrice}
                    value="Price Hiest First"
                    name="price"
                    type="radio"
                    id="high price"
                  />
                  <label htmlFor="high price">Price Hiest First</label>
                </div>
              </div>
            </div>

            {isFilterByPriceMode ? (
              <FilterByPrice
                allProducts={allProducts}
                bgImages={bgImages}
                param={param}
                truncateString={truncateString}
                selectedItem={selectedItem}
                price={currentPrice}
              />
            ) : isSortByPriceMode ? (
              <SortByPrice
                allProducts={allProducts}
                bgImages={bgImages}
                param={param}
                truncateString={truncateString}
                selectedItem={selectedItem}
                price={currentPrice}
                isSortByPriceMode={isSortByPriceMode}
                setAllProducts={setAllProducts}
              />
            ) : (
              <div className="rightSide">
                <div className="image">
                  <img
                    className="image-filter"
                    src={bgImages[param.category]}
                    alt=""
                  />
                </div>
                <div className="filteredCards">
                  {allProducts?.map((item, index) => (
                    <Link
                      key={index}
                      to={`/product/${param.category}/${
                        checkIsCategoryHasType() ? selectedItem + "/" : ""
                      }${+item.id}`}
                    >
                      <div key={item.id} className="images">
                        {item.images.length > 1 ? (
                          <>
                            <img
                              className="img1"
                              src={item?.images[0]}
                              alt=""
                            />
                            <img
                              className="img2"
                              src={item?.images[1]}
                              alt=""
                            />
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
            )}
          </div>
        </div>
      </div>
    </>
  );
};
