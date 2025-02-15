import React from 'react';

const Contact = () => {
  return (
    <div className="w-4/5 mx-auto my-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-4xl font-bold text-orange-500 text-center mb-6">Contact Us</h1>
      <p className="text-gray-600 text-center mb-8">
        We'd love to hear from you! Please fill out the form below, and we'll get back to you as soon as possible.
      </p>
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter your phone number"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter your message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
