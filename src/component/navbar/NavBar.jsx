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
  console.log(isOppen);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src={flag} alt="" /> <ExpandMoreIcon />
          </div>
          <div className="item">
            <span>USD</span> <ExpandMoreIcon />
          </div>
          <div className="item">
            <Link className="link" to="/product/2">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link">men</Link>
          </div>
          <div className="item">
            <Link className="link">Children</Link>
          </div>
          <div className="item">
            <Link className="link">Accessory</Link>
          </div>
        </div>

        <div className="center">
          <Link to="/" className="link">
            {" "}
            Store
          </Link>
        </div>

        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              HomePage
            </Link>
          </div>
          <div className="item">
            <Link to="/about" className="link">
              About
            </Link>
          </div>
          <div className="item">
            <Link to="/contact" className="link">
              Contact
            </Link>
          </div>
          <div className="item">
            <Link to="/store" className="link">
              Store
            </Link>
          </div>
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
