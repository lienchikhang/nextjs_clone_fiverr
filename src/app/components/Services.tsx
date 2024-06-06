"use client";
import React from "react";
import Slider from "react-slick";
import "../styles/services.scss";

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
              <p className="title__sub">Add talent to AI</p>
              <h3 className="title__main">AI Artists</h3>
            </div>
            <img className="service__img" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161247/ai-artists-2x.png" alt="s1" />
          </div>
        </div>
        <div className="service__article">
          <div className="article__wrapper">
            <div className="service__title">
              <p className="title__sub">Build your brand</p>
              <h3 className="title__main">Logo Design</h3>
            </div>
            <img className="service__img" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161257/logo-design-2x.png" alt="s1" />
          </div>
        </div>
        <div className="service__article">
          <div className="article__wrapper">
            <div className="service__title">
              <p className="title__sub">Customize your site</p>
              <h3 className="title__main">WordPress</h3>
            </div>
            <img className="service__img" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161257/wordpress-2x.png" alt="s1" />
          </div>
        </div>
        <div className="service__article">
          <div className="article__wrapper">
            <div className="service__title">
              <p className="title__sub">Share your message</p>
              <h3 className="title__main">Voice Over</h3>
            </div>
            <img className="service__img" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161253/voice-over-2x.png" alt="s1" />
          </div>
        </div>
        <div className="service__article">
          <div className="article__wrapper">
            <div className="service__title">
              <p className="title__sub">Engage your audience</p>
              <h3 className="title__main">Video Explainer</h3>
            </div>
            <img className="service__img" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161245/animated-explainer-2x.png" alt="s1" />
          </div>
        </div>
        <div className="service__article">
          <div className="article__wrapper">
            <div className="service__title">
              <p className="title__sub">Reach more customers</p>
              <h3 className="title__main">Social Media</h3>
            </div>
            <img className="service__img" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161249/social-2x.png" alt="s1" />
          </div>
        </div>
        <div className="service__article">
          <div className="article__wrapper">
            <div className="service__title">
              <p className="title__sub">Unlock growth online</p>
              <h3 className="title__main">SEO</h3>
            </div>
            <img className="service__img" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/27f914ed7984fdd2d55aa1fb5e74bd6a-1690384243592/seo-2x.png" alt="s1" />
          </div>
        </div>
        <div className="service__article">
          <div className="article__wrapper">
            <div className="service__title">
              <p className="title__sub">Color your dreams</p>
              <h3 className="title__main">Illustration</h3>
            </div>
            <img className="service__img" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161236/illustration-2x.png" alt="s1" />
          </div>
        </div>
        <div className="service__article">
          <div className="article__wrapper">
            <div className="service__title">
              <p className="title__sub">Learn your business</p>
              <h3 className="title__main">Data Entry</h3>
            </div>
            <img className="service__img" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161248/data-entry-2x.png" alt="s1" />
          </div>
        </div>
        <div className="service__article">
          <div className="article__wrapper">
            <div className="service__title">
              <p className="title__sub">Go global</p>
              <h3 className="title__main">Translation</h3>
            </div>
            <img className="service__img" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161247/translation-2x.png" alt="s1" />
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default Services;
