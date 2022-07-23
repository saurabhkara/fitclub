import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png'
import heart from '../../assets/heart.png';
import calories from '../../assets/calories.png'

export default function Hero() {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />

        {/* the best section */}
        <div className="the-best-ad">
          <div></div>
          <span>the best Fitness club in the town</span>
        </div>

        {/* hero heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body.
            </span>
          </div>
        </div>

        {/* figure section */}
        <div className="figure">
          <div>
            <span>+140</span>
            <span>expert Coachs</span>
          </div>
          <div>
            <span>+978 </span>
            <span>members</span>
          </div>
          <div>
            <span>+50</span>
            <span>fiteness programs</span>
          </div>
        </div>

        {/* Hero Button */}
        <div className="hero-buttons">
            <button className="btn">Get Started</button>
            <button className="btn"> Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>

        <div className="heart-rate">
          <img src={heart} alt="heart" />
          <span>Heart Rate</span>
          <span>116bpm</span>
        </div>

        {/* hero images */}
        <img src={hero_image} alt="hero-image" className="hero-image"/>
        <img src={hero_image_back} alt="hero-image" className="hero-image-back"/>

        {/* calories  */}
        <div className="calories">
          <img src={calories} alt='calories' />
          <div>
          <span>Calories Burned</span>
          <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
}
