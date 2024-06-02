import React from "react";
import "../styles/welcome.scss";

const Welcome = () => {
  return (
    <section className="welcome">
      <div className="welcome__wrapper">
        <div className="welcome__info">
          <h1>
            Freelance services at your
            <i>fingertips!</i>
          </h1>
          <button>Join fiverr</button>
        </div>
        <div className="welcome__banner">
          <img src={"/images/l1.png"} alt="l1" />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
