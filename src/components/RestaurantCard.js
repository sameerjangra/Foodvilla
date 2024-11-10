import { IMG_CDN } from "../config"
export const RestaurantCard =({name,cuisines,avgRating,cloudinaryImageId,locality})=>{   
    return( 
        <div className="cards">
            <img src={IMG_CDN+
         cloudinaryImageId}></img>
            <h2>{name}</h2>
            <h3>{cuisines.join(" , ")}</h3>
            {/* <h3>{cuisines[1]}</h3> */}
            {/* <h3>{locality}</h3> */}
            <h4>{avgRating} stars</h4>
        </div>
    )
}
