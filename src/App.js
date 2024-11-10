import React from "react";
import ReactDOM  from "react-dom/client";
import Heading from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const Foodvilla =()=>{
   return( 
    <>
    <Heading />
    <Body />
    <Footer />
    </>
   )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Foodvilla/>)