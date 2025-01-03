import { useEffect, useState } from "react";

const useOnline = ()=>{
    const[isOnline , setIsOnline] = useState(true)

useEffect(()=>{
    const handeleOnline=()=>{
            setIsOnline(true)
        };
    const handeleOffline =()=>{ 
            setIsOnline(false)
    }
    window.addEventListener("offline",handeleOffline)
    window.addEventListener("online",handeleOnline)

    return()=>{
        window.addEventListener("offline",handeleOffline)
        window.addEventListener("online",handeleOnline)
    }
},[])
return isOnline;

}
export default useOnline;
