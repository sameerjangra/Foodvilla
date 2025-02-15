import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
    return (
        <div 
            className="border border-black p-4 m-2 cursor-pointer rounded-lg shadow-md"
            onClick={setIsVisible} 
        >
            <div className="flex justify-between items-center">
                <h2 className="font-bold text-xl">{title}</h2>
                <FontAwesomeIcon icon={isVisible ? faChevronUp : faChevronDown} />
            </div>
            {isVisible && <p className="mt-2 text-gray-700">{description}</p>}
        </div>
    );
};

const Instamart = () => {
    const [visibleSection, setVisibleSection] = useState(null);

    const SetIsVisibleSection = (section) => {
        setVisibleSection((prevSection) => (prevSection === section ? null : section));
    };

    return (
        <div className="w-[70%] ml-52">
            <h1 className="font-bold text-2xl p-2 m-2">Instamart</h1> 
            <Section 
                title={"About Instamart"} 
                description={"Instamart is a quick commerce platform that delivers groceries and essentials to your doorstep in minutes. Our goal is to provide fresh, high-quality products with the convenience of instant delivery. We partner with local stores and suppliers to ensure that you get the best products at competitive prices. Our advanced logistics and technology-driven approach allow us to provide a seamless shopping experience. Whether you need fresh vegetables, dairy products, or everyday household essentials, Instamart ensures that you get what you need in record time, making grocery shopping hassle-free."} 
                isVisible={visibleSection === "About Instamart"} 
                setIsVisible={() => SetIsVisibleSection("About Instamart")} 
            />
            <Section 
                title={"Team Instamart"} 
                description={"Our team consists of passionate individuals who believe in the power of technology to revolutionize shopping. From delivery executives to software engineers, every member plays a crucial role in ensuring seamless service and customer satisfaction. Our workforce is trained to provide efficient service, from picking the best quality products to ensuring timely and safe delivery. We continuously innovate and optimize our operations to provide a superior shopping experience. Our commitment to excellence drives us to improve our services every day, ensuring customers get the best shopping experience possible."} 
                isVisible={visibleSection === "Team Instamart"}
                setIsVisible={() => SetIsVisibleSection("Team Instamart")} 
            />
            <Section 
                title={"Careers"} 
                description={"Looking for an exciting career in a fast-paced environment? Join Instamart and be a part of our dynamic team. We offer roles in operations, technology, customer support, and more. Visit our careers page to explore opportunities. At Instamart, we value innovation, dedication, and a customer-first approach. We provide comprehensive training programs, competitive compensation, and opportunities for growth. Whether you're looking to build a career in logistics, tech, or customer service, Instamart offers a platform to grow and make an impact in the world of quick commerce."} 
                isVisible={visibleSection === "Careers"}
                setIsVisible={() => SetIsVisibleSection("Careers")} 
            />
            <Section 
                title={"Our Services"} 
                description={"Instamart offers a range of services including grocery delivery, fresh produce, dairy products, snacks, beverages, and household essentials. We also provide special discounts and membership benefits for frequent shoppers. Our user-friendly mobile and web platforms make ordering easy and convenient. Additionally, we offer express delivery options for urgent requirements and eco-friendly packaging solutions to reduce our carbon footprint. With partnerships with trusted suppliers and vendors, we ensure the highest quality standards in every product delivered to your doorstep."} 
                isVisible={visibleSection === "Our Services"}
                setIsVisible={() => SetIsVisibleSection("Our Services")} 
            />
            <Section 
                title={"Customer Support"} 
                description={"We value our customers and strive to provide the best support experience. If you have any questions, feedback, or issues with your order, our dedicated support team is available 24/7 to assist you. Our customer service representatives are trained to handle all queries efficiently, ensuring that every concern is resolved swiftly. We also have an AI-powered chatbot and a detailed FAQ section to help with common issues. Our commitment to customer satisfaction means we continuously refine our support services to meet and exceed your expectations."} 
                isVisible={visibleSection === "Customer Support"}
                setIsVisible={() => SetIsVisibleSection("Customer Support")} 
            />
        </div>
    );
};

export default Instamart;
