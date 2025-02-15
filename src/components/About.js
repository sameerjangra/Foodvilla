import React from "react";
import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6 text-center">
      <h2 className="text-4xl font-bold text-red-600 mb-4">About Us</h2>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto">
        Welcome to <span className="font-semibold text-red-500">Food Villa</span>, your go-to destination for delicious meals and recipes.
        We are passionate about bringing you the best flavors from around the world.
      </p>

      {/* Our Mission Section */}
      <div className="mt-10 p-6 bg-white shadow-md rounded-lg max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold text-red-600 mb-3">Our Mission</h3>
        <p className="text-gray-700">
          Our mission is to serve the best quality food and create an unforgettable dining experience.
          We use fresh ingredients, unique recipes, and a love for cooking to craft mouth-watering dishes.
        </p>
      </div>

      {/* Our Team Section */}
      <div className="mt-10 p-6 bg-white shadow-md rounded-lg max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold text-red-600 mb-3">Meet Our Team</h3>
        <p className="text-gray-700">
          Our team of experienced chefs and food enthusiasts work hard to bring you the best dining experience.
          Every dish is crafted with passion and love to ensure the best flavors.
        </p>
      </div>

      {/* Our Values Section */}
      <div className="mt-10 p-6 bg-white shadow-md rounded-lg max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold text-red-600 mb-3">Our Values</h3>
        <ul className="text-gray-700 list-disc list-inside">
          <li>Quality - We use only the finest ingredients.</li>
          <li>Customer Satisfaction - Your happiness is our priority.</li>
          <li>Innovation - Always bringing new flavors and ideas.</li>
          <li>Integrity - Honest and transparent in our approach.</li>
        </ul>
      </div>

      {/* Customer Testimonials Section */}
      <div className="mt-10 p-6 bg-white shadow-md rounded-lg max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold text-red-600 mb-3">Customer Testimonials</h3>
        <p className="text-gray-700 italic">"food Villa has the best meals I have ever tasted! The quality and flavors are unmatched." - Sarah J.</p>
        <p className="text-gray-700 italic">"Amazing service and delicious food. I highly recommend trying their special dishes!" - Michael T.</p>
      </div>

      {/* Contact Section */}
      <div className="mt-10 p-6 bg-white shadow-md rounded-lg max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold text-red-600 mb-3">Contact Us</h3>
        <p className="text-gray-700">
          Have any questions or suggestions? Feel free to reach out to us!
        </p>
        <p className="text-gray-700">📧 Email: contact@foodvilla.com</p>
        <p className="text-gray-700">📞 Phone: +123-456-7890</p>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-gray-500">
        <p>&copy; 2025 food Villa. All rights reserved.</p>
      </footer>

      <Outlet />
    </div>
  );
};

export default About;
