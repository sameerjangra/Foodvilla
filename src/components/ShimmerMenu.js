const ShimmerMenu = () => {
  return (
    <div className="max-w-5xl mx-auto mt-16 px-4">
      {/* Shimmer Header */}
      <div className="h-10 w-44 mb-6 rounded-md bg-slate-200 animate-pulse"></div>
      <div className="h-24 w-full mb-6 rounded-md bg-slate-200 animate-pulse"></div>
      
      {/* Shimmer Menu */}
      <ul className="space-y-10">
        {Array(6).fill("").map((_, index) => (
          <li
            key={index}
            className="flex flex-col lg:flex-row justify-between gap-4 border-b border-gray-200 pb-6"
          >
            {/* Text Section */}
            <div className="flex-1 space-y-3">
              <div className="h-8 w-3/4 rounded-md bg-slate-200 animate-pulse"></div> {/* Name */}
              <div className="h-6 w-1/3 rounded-md bg-slate-200 animate-pulse"></div> {/* Price */}
              <div className="h-6 w-1/4 rounded-md bg-slate-200 animate-pulse"></div> {/* Rating */}
              <div className="h-5 w-full max-w-lg rounded-md bg-slate-200 animate-pulse"></div> {/* Description */}
            </div>

            {/* Image Placeholder */}
            <div className="relative w-full sm:w-[200px] h-[160px] rounded-xl bg-slate-200 animate-pulse"></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShimmerMenu;
