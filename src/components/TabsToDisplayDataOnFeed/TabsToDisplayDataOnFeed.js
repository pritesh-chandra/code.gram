import React, { useState } from 'react';

// Importing the images
import FeaturedIcn from "../../assets/Featured.svg";
import HeartIcn from "../../assets/Heart.svg";
import RisingIcn from "../../assets/Rising.svg";

const TabsToDisplayDataOnFeed = () => {
    const [activeButton, setActiveButton] = useState("Following");

  return (
    <div className='tabs-to-display-data-on-feed-main-container'>
        <div className="myFeed-col2-contents-details">
            <button
              onClick={() => setActiveButton("Following")}
              className={activeButton === "Following" ? "active" : ""}
            >
              <img src={HeartIcn} alt="Heart" />
              <span>Following</span>
            </button>
            <button
              onClick={() => setActiveButton("Featured")}
              className={activeButton === "Featured" ? "active" : ""}
            >
              <img src={FeaturedIcn} alt="Heart" />
              <span>Featured</span>
            </button>
            <button
              onClick={() => setActiveButton("Rising")}
              className={activeButton === "Rising" ? "active" : ""}
            >
              <img src={RisingIcn} alt="Heart" />
              <span>Rising</span>
            </button>
          </div>
    </div>
  )
}

export default TabsToDisplayDataOnFeed