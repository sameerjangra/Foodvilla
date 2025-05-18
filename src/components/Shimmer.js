const Shimmer = () => {
  return (
    <div className="flex flex-wrap  m-1 md:m-3 pl-2.5 justify-center">
      {Array(15)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            // Responsive width: full on mobile, smaller on md+
            className="h-[340px] w-[170px] p-2  m-1  md:h-[440px] md:w-[260px]  md:p-4 border-2 md:m-2 shadow-xl bg-cover rounded-md"
          >
            {/* Image skeleton */}
            <div className="w-full aspect-[7/9] mb-4 rounded-md bg-slate-100 animate-shimmer bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%]"></div>

            {/* Title skeleton */}
            <div className="h-3 md:h-7 w-3/4 bg-slate-100 mt-2 animate-shimmer bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"></div>
            {/* Subtitle skeletons */}
            <div className="h-3 md:h-7 w-2/3 bg-slate-100 mt-3 animate-shimmer bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"></div>
            <div className="h-3 md:h-7 w-1/2 bg-slate-100 mt-3 animate-shimmer bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
