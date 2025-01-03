import { useState ,useContext } from 'react';
import logo from '../assets/img/logo1.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faPhone, faShoppingCart, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import UserContext from '../utils/UserContext';

const Title = () => (
  <>
    <a href="/">
      <img className="h-20 rounded-full p-2" alt="logo" src={logo}></img>
    </a>
   
    {/* <h2 className="p-3 text-2xl font-bold -ml-[660px] mt-3"> <Link to={"/"}>Foodvilla</Link></h2> */}
  </>
);

const HeadingComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
const {user} = useContext(UserContext)
  return (
    <div className="flex justify-between m-3 shadow-xl">
      <Title />
      <div className="justify-between m-2 p-4">
        <ul className="flex items-center space-x-6 ">
        <span className="font-bold text-red-700 text-xl">{user.name}</span>
          <li className="hover:text-orange-700"> 
          <Link to="/" className="no-underline"> <FontAwesomeIcon icon={faHome} /> Home</Link>
          </li>
          <li className="hover:text-orange-700">
          <Link to="/about" className="no-underline"><FontAwesomeIcon icon={faInfoCircle} /> About</Link>
          </li>
          <li className="hover:text-orange-700">
          <Link to ="/contact" className="no-underline"><FontAwesomeIcon icon={faPhone} /> Contact Us</Link>
          </li>
          <li className="hover:text-orange-700">
          <Link to="/cart" className="no-underline"> <FontAwesomeIcon icon={faShoppingCart} />Cart</Link>
          </li>
          <li className="hover:text-orange-700">
          <Link to="/instamart" className="no-underline"> <FontAwesomeIcon icon={faShoppingCart} />Instamart</Link>
          </li>
          {isLoggedIn ? (
            <li className="hover:text-orange-700 cursor-pointer" onClick={() => setIsLoggedIn(false)}>
              <FontAwesomeIcon icon={faSignOutAlt} /> Logout
            </li>
          ) : (
            <li className="hover:text-orange-700 cursor-pointer" onClick={() => setIsLoggedIn(true)}>
              <FontAwesomeIcon icon={faSignInAlt} /> Login  
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default HeadingComponent;
