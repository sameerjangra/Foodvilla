import React from "react";

const ShimmerMenu = () => {
  return (
    <div className="shimmer-container">
      <div className="shimmer-header"></div>
      {Array(6)
        .fill("")
        .map((_, index) => (
          <div key={index} className="shimmer-info">
            <div>
            </div>
            <div key={index} className="shimmer-menu-item"></div>
            <div className={`shimmer-img1 ${index + 1}`}></div>
          </div>
        ))}
    </div>
  );
};

export default ShimmerMenu;