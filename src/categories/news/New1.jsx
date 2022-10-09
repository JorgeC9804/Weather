import React from "react";
import "./News.styles.css";

const News1 = () => {
  return (
    <div className="card-1">
      <img
        src={`https://i.ytimg.com/vi/CzwKg3ho5aA/maxresdefault.jpg`}
        alt="cov"
      />
      <div style={{ position: "relative", top: "15px" }}>
        Lorem ipsum dolor sit amet consec........ view more News
      </div>
    </div>
  );
};

export default News1;
