const Shimmer = () => {
    return (
      <div className="restaurant-list">
        {/* Repeat skeleton cards as needed */}
        {Array(12)
          .fill("")
          .map((_, index) => (
            <div key={index} className="shimmer-card">
              <div className="shimmer-img"></div>
              <div className="shimmer-text shimmer-title"></div>
              <div className="shimmer-text shimmer-subtitle"></div>
              <div className="shimmer-text shimmer-subtitle-2"></div>
            </div>
          ))}
      </div>
    );
  };
  
  export default Shimmer;
  