import React from "react";
import { HomeSlider } from "../../component/slider/HomeSlider";
import "./Home.scss";
import { Categories } from "../../component/categories/Categories";
import { Contact } from "../../component/contact/Contact";
import { FeaturedData } from "../../component/FeaturedData/FeaturedData";
import { Cart } from "../../component/cart/Cart";

export const HomePage = () => {
  return (
    <div className="home">
      <HomeSlider />
      <FeaturedData type="featured" />
      <Categories />
      <FeaturedData type="trending" />
      <Contact />
    </div>
  );
};
