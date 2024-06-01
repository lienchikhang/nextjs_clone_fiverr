"use client";
import React from "react";
import Slider from "react-slick";
import "../styles/services.scss";
import Image from "next/image";

const Services = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
    ],
  };

  return (
    <section className="services">
      <h2 className="service__heading">Popular services</h2>
      <Slider {...settings}>
        <div className="service__article">
          <div className="article__wrapper">
            <div className="service__title">
              <p className="title__sub">Build your brand</p>
              <h3 className="title__main">Logo Design</h3>
            </div>
            <img className="service__img" src="/images/s1.jpg" alt="s1" />
          </div>
        </div>
        <div className="service__article">
          <div className="article__wrapper">
            <div className="service__title">
              <p className="title__sub">Build your brand</p>
              <h3 className="title__main">Logo Design</h3>
            </div>
            <img className="service__img" src="/images/s2.jpg" alt="s1" />
          </div>
        </div>
        <div className="service__article">
          <div className="article__wrapper">
            <div className="service__title">
              <p className="title__sub">Build your brand</p>
              <h3 className="title__main">Logo Design</h3>
            </div>
            <img className="service__img" src="/images/s1.jpg" alt="s1" />
          </div>
        </div>
        <div className="service__article">
          <div className="article__wrapper">
            <div className="service__title">
              <p className="title__sub">Build your brand</p>
              <h3 className="title__main">Logo Design</h3>
            </div>
            <img className="service__img" src="/images/s2.jpg" alt="s1" />
          </div>
        </div>
        <div className="service__article">
          <div className="article__wrapper">
            <div className="service__title">
              <p className="title__sub">Build your brand</p>
              <h3 className="title__main">Logo Design</h3>
            </div>
            <img className="service__img" src="/images/s1.jpg" alt="s1" />
          </div>
        </div>
        <div className="service__article">
          <div className="article__wrapper">
            <div className="service__title">
              <p className="title__sub">Build your brand</p>
              <h3 className="title__main">Logo Design</h3>
            </div>
            <img className="service__img" src="/images/s2.jpg" alt="s1" />
          </div>
        </div>
        <div className="service__article">
          <div className="article__wrapper">
            <div className="service__title">
              <p className="title__sub">Build your brand</p>
              <h3 className="title__main">Logo Design</h3>
            </div>
            <img className="service__img" src="/images/s1.jpg" alt="s1" />
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default Services;
