import UserContext from "../utils/UserContext";
import { useContext } from "react";
const Contact = ()=>{
    const {user} = useContext(UserContext)
    return(
        <div>
            <span className="font-bold text-2xl text-red-900">{user.name}</span>
            <h3 className="font-bold text-2xl text-red-900">{user.email}</h3>
            <h4>
                This is my Contact Page. 
            </h4>
        </div>
    )
}
export default Contact;