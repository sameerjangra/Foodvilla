import React from "react";

const ShimmerMenu = () => {
  return (
    <div className="h-full w-[60%] ml-72 mt-16">
      {/* Shimmer Header */}
      <div className="h-10 w-44 mb-6 rounded-md bg-slate-100 animate-shimmer bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%]"></div>
      <div className="h-24 w-full mb-6 rounded-md bg-slate-100 animate-shimmer bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%]"></div>
      
      {/* Shimmer Menu */}
      <div className="mt-10">
        <h2 className="h-8 w-32 mb-4r rounded-md bg-slate-100 animate-shimmer bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%]"></h2>
        <ul>
          {Array(6)
            .fill("")
            .map((_, index) => (
              <li
                key={index}
                className="flex justify-between mt-5 border-b-2 border-gray-100 pb-4"
              >
                <div className="w-3/4 space-y-3">
                  {/* Name */}
                  <div className="h-6 w-1/2 rounded-md bg-slate-100 animate-shimmer bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%]"></div>
                  {/* Price */}
                  <div className="h-5 w-1/3 rounded-md bg-slate-100 animate-shimmer bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%]"></div>
                  {/* Average Rating */}
                  <div className="h-5 w-1/4 rounded-md bg-slate-100 animate-shimmer bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%]"></div>
                  {/* Description */}
                  <div className="h-5 w-3/4 rounded-md bg-slate-100 animate-shimmer bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%]"></div>
                </div>
                {/* Image Placeholder */}
                <div className="h-[130px] w-[130px] rounded-2xl bg-slate-100 animate-shimmer bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%]"></div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ShimmerMenu;
