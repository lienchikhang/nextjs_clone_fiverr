"use client";
import React from "react";
import Slider from "react-slick";
import "../styles/carousel.scss";
import CustomArrow from "./CustomArrow";
import SearchIcon from "@mui/icons-material/Search";

const Carousel = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    waitForAnimate: false,
    nextArrow: <CustomArrow />,
    prevArrow: <CustomArrow />,
  };

  return (
    <div className="carousel">
      <div className="carousel__background">
        <Slider {...settings} className="custom-slide">
          <div>
            <div className="bg-pink-800 my-slide">
              <div></div>
              <img src={"./images/w2.png"} />
            </div>
          </div>
          <div>
            <div className="bg-amber-600 my-slide">
              <div></div>
              <img src={"./images/w3.png"} />
            </div>
          </div>
          <div>
            <div className="bg-emerald-700 my-slide">
              <div></div>
              <img src={"./images/w1.png"} />
            </div>
          </div>
        </Slider>
      </div>
      <div className="carousel__search">
        <div className="search__wrapper">
          <h2 className="search__heading">
            Find the right freelance <br /> service, right away
          </h2>
          <div className="search__bar">
            <input type="text" placeholder="Search for any services..." />
            <button>
              <SearchIcon />
            </button>
          </div>
          <div className="search__suggestion">
            <p>Popular:</p>
            <ul>
              <li>Web Design</li>
              <li>WordPress</li>
              <li>Logo Design</li>
              <li>AI Services</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="carousel__animate"></div>
    </div>
  );
};

export default Carousel;