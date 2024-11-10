import logo from '../../logo1.jpg';
const Title =()=>(
    <> 
    <a href="/">
   <img className="logo" alt="logo" src={logo}></img>
   </a>
   <h2 id="logoName">Foodvilla</h2>
   </>
)
console.log("header")
const Heading = ()=>{
    return(
        <div>
            <HeadingComponent />
        </div>
    )
}


const HeadingComponent = ()=>{
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
           </div>
            );
        }
        
export default Heading;
    