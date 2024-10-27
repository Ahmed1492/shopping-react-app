import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import flag from "../../img/en.png";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { Cart } from "../cart/Cart";
export const NavBar = () => {
  const [isOppen, setIsOppen] = useState(false);
  // console.log(isOppen);
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
              <Link className="link" to="/products/men">
                Men
              </Link>
            </li>
            <li>
              <Link className="link" to="/products/woman">
                Women
              </Link>
            </li>
            <li>
              <Link to="products/children" className="link">
                Children
              </Link>
            </li>
            <li>
              <Link className="link">Accessory</Link>
            </li>
            <li>
              <Link to="products/shoses" className="link">
                Shoses
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
              <Link className="link" to="/">
                HomePage
              </Link>
            </li>
            <li>
              <Link to="/about" className="link">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link">
                Contact
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
            <FavoriteBorderIcon />
            <div onClick={() => setIsOppen(!isOppen)} className="cartIcone">
              <ShoppingCartIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {isOppen === true && <Cart />}
    </div>
  );
};
