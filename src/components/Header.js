import { useState } from 'react';
import logo from '../assets/img/logo1.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faPhone, faShoppingCart, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Title = () => (
  <>
    <a href="/">
      <img className="logo" alt="logo" src={logo}></img>
    </a>
   
    <h2 id="logoName"> <Link to={"/"}>Foodvilla</Link></h2>
  </>
);

const HeadingComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
          <Link to="/" className="no-underline"> <FontAwesomeIcon icon={faHome} /> Home</Link>
          </li>
          <li>
          <Link to="/about" className="no-underline"><FontAwesomeIcon icon={faInfoCircle} /> About</Link>
          </li>
          <li>
          <Link to ="/contact" className="no-underline"><FontAwesomeIcon icon={faPhone} /> Contact Us</Link>
          </li>
          <li>
          <Link to="/cart" className="no-underline"> <FontAwesomeIcon icon={faShoppingCart} />Cart</Link>
          </li>
          {isLoggedIn ? (
            <li id="login-btn" onClick={() => setIsLoggedIn(false)}>
              <FontAwesomeIcon icon={faSignOutAlt} /> Logout
            </li>
          ) : (
            <li id="login-btn" onClick={() => setIsLoggedIn(true)}>
              <FontAwesomeIcon icon={faSignInAlt} /> Login  
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default HeadingComponent;
