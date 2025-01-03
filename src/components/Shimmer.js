const Shimmer = () => {
  return (
    <div className="flex flex-wrap m-3 pl-2.5">
      {/* Repeat skeleton cards as needed */}
      {Array(15)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="h-[430px] w-[260px] p-4 border-2 m-2 shadow-xl bg-cover rounded-md"
          >
            <div className="float-left w-56 h-64 mb-2 rounded-md bg-slate-100 animate-shimmer bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%]"></div>
            <div className="h-7 w-52 bg-slate-100 mt-[270px] animate-shimmer bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%]"></div>
            <div className="h-7 w-48 bg-slate-100 mt-3 animate-shimmer bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%]"></div>
            <div className="h-7 w-44 bg-slate-100 mt-3 animate-shimmer bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%]"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
