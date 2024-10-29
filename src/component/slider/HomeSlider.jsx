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
    "https://img.freepik.com/free-photo/fashionable-woman-brown-coat-beige-hat-posing_273443-3773.jpg?t=st=1730212872~exp=1730216472~hmac=27b5475967976999d7af64fbc453508390a0d0cd5dfd8a7242fbebd0923adc4b&w=1380",
    "https://img.freepik.com/free-photo/young-businessman-sitting-street_1157-35756.jpg?t=st=1730212975~exp=1730216575~hmac=6e7f4909d34cfc023f558b1f57d83c80a830ab2c1fb7e31cdb9eea362fe62592&w=1380",
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
