import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import flag from "../../img/en.png";
import { Link, useParams } from "react-router-dom";
import "./Navbar.scss";
import { Cart } from "../cart/Cart";
import { useSelector } from "react-redux";
export const NavBar = () => {
  const [isOppen, setIsOppen] = useState(false);
  // console.log(isOppen);
  const [cartQuantity, setCartQuantity] = useState(0);

  let param = useParams();
  // console.log(param);
  const cartItems = useSelector((state) => state.cart);

  const getCuurentPath = (currentPath) => {
    // console.log("param.category", param.category);
    // console.log("currentPath", currentPath);
    if (param?.category?.toLowerCase() == currentPath?.toLowerCase())
      return "currentLink";
    return "";
  };

  useEffect(() => {
    setCartQuantity();
  }, []);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <ul>
            <li>
              <img src={flag} alt="" /> <ExpandMoreIcon />
            </li>
            <li>
              <span>USD</span> <ExpandMoreIcon />
            </li>
            <li>
              <Link
                className={`link ${getCuurentPath("men")}`}
                to="/products/men"
              >
                Men
              </Link>
            </li>
            <li>
              <Link
                className={`link ${getCuurentPath("woman")}`}
                to="/products/woman"
              >
                Woman
              </Link>
            </li>
            <li>
              <Link
                to="/products/children"
                className={`link ${getCuurentPath("children")}`}
              >
                Children
              </Link>
            </li>
            <li>
              <Link
                to="/products/bags"
                className={`link ${getCuurentPath("bags")}`}
              >
                BAGS
              </Link>
            </li>
          </ul>
        </div>

        <div className="center">
          <Link to="/" className="link">
            Store
          </Link>
        </div>

        <div className="right">
          <ul>
            <li>
              <Link className={`link`} to="/">
                HomePage
              </Link>
            </li>
            <li>
              <Link
                to="/products/newSesson"
                className={`link ${getCuurentPath("newSesson")}`}
              >
                New Sesson
              </Link>
            </li>
            <li>
              <Link
                to="/products/sale"
                className={`link ${getCuurentPath("sale")}`}
              >
                Sale
              </Link>
            </li>
            <li>
              <Link to="/store" className="link">
                Store
              </Link>
            </li>
          </ul>

          <div className="icons">
            <SearchIcon />
            <PersonOutlineIcon />
            <Link to="/products/wishList">
              <FavoriteBorderIcon />
            </Link>
            <div onClick={() => setIsOppen(!isOppen)} className="cartIcone">
              <ShoppingCartIcon />
              <span>{cartItems.products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {isOppen === true && <Cart />}
    </div>
  );
};
