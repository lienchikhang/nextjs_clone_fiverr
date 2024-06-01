import React from "react";
import ItemMenu from "./ItemMenu";
import Image from "next/image";
import "../styles/promotion.scss";

const Promotion = () => {
  const promotes = [
    {
      title: "Stick to your budget",
      desc: [
        "Find the right service for every price point. No hourly rates, just project-based pricing.",
      ],
    },
    {
      title: "Get quality work done quickly",
      desc: [
        "Hand your project over to a talented freelancer in minutes, get long-lasting results.",
      ],
    },
    {
      title: "Pay when you're happy",
      desc: [
        "Upfront quotes mean no surprises. Payments only get released when you approve.",
      ],
    },
    {
      title: "Count on 24/7 support",
      desc: [
        "Our round-the-clock support team is available to help anytime, anywhere.",
      ],
    },
  ];

  return (
    <section className="promotion">
      <div className="promotion__info">
        <h2>The best part? Everything.</h2>
        {promotes.map((promote, idx) => {
          return (
            <ItemMenu
              heading={promote.title}
              items={promote.desc}
              isDefault={true}
            />
          );
        })}
      </div>
      <div className="promotion__image">
        <img src={"/images/p2.png"} alt="p1" />
        <img src={"/images/p3.png"} alt="p1" />
      </div>
    </section>
  );
};

export default Promotion;
