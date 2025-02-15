import { IMG_CDN } from "../config";

export const RestaurantCard =({name,cuisines,avgRating,cloudinaryImageId,locality})=>{   
   
    return( 
        <div className="h-[440px] w-[260px] p-4 border-2 m-2 shadow-2xl bg-cover rounded-md hover:border-slate-300 shadow-innerr">
            <img  className="float-left w-56 h-64 mb-2  rounded-md" src={IMG_CDN+
         cloudinaryImageId}></img>
            <h2 className="font-bold text-xl">{name}</h2>
            {/* <h3>{cuisines.join(" , ")}</h3> */}
            <h3>
  {cuisines
    ? cuisines.slice(0, 3).join(", ") +
      (cuisines.length > 3 ? "..." : "")
    : "Cuisines not available"}
</h3>
            <h3>{cuisines[1]}</h3>
            {/* <h3>{locality}</h3> */}
            <h4>{avgRating} stars</h4>
            <span className="font-bold text-red-400 text-sm"></span>
        </div>

    )
}

