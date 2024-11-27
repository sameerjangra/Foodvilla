import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "./ProfileClasses";
import ProfileFunctionComponent from "./Profile";

class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent-constructor")
    }

componentDidMount(){

}

componentWillUnmount() {

} 

render(){
    console.log("Parent-render")
    return(
        <>
        <h3>THIS IS THE ABOUT PAGE
        </h3>
        {/* <h4><Profile name={"Child"} /></h4> */}
        <h4><ProfileFunctionComponent name={"Child"} /></h4>
        </>
    )
}


}
 
export default About;
