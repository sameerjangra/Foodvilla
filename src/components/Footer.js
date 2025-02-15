const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 mt-10">
      <p className="text-lg">🍽️ FoodVilla - Serving Fresh & Tasty Meals</p>
      <p className="text-sm">© {new Date().getFullYear()} FoodVilla. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
