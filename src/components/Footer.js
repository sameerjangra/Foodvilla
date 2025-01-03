import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer =()=>{
    const {user} = useContext(UserContext);
    return(
    <>
    <h3 className="pl-52">This website is developed by {user.name} - {user.email}</h3>
    </>
    )
}

export default Footer;