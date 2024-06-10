import React, { useState } from "react";
import "./HomeSlider.scss";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import { Card } from "@mui/material";
import { FeaturedData } from "../FeaturedData/FeaturedData";
import { Categories } from "../categories/Categories";
export const HomeSlider = () => {
  const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  const [curentSlide, setCurentSlide] = useState(0);

  const prevSlide = () => {
    setCurentSlide(curentSlide === 0 ? 2 : curentSlide - 1);
  };
  const nextSlide = () => {
    setCurentSlide(curentSlide === 2 ? 0 : curentSlide + 1);
  };

  return (
    <div className="home">
      <div className="sliderImages">
        <div
          style={{ transform: `translateX(-${curentSlide * 100}vw)` }}
          className="container"
        >
          <img src={data[0]} alt="" />
          <img src={data[1]} alt="" />
          <img src={data[2]} alt="" />
        </div>
        <div className="icons">
          <div onClick={prevSlide} className="icon">
            <WestIcon />
          </div>
          <div onClick={nextSlide} className="icon">
            <EastIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
