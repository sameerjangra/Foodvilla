import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
    return (
        <div 
            className="border border-black p-2 m-2 cursor-pointer"
            onClick={setIsVisible} // Trigger the toggle action from the parent
        >
            <div className="flex justify-between">
                <h2 className="font-bold text-xl">{title}</h2>
                <FontAwesomeIcon icon={isVisible ? faChevronUp : faChevronDown} />
            </div>
            {isVisible && <p>{description}</p>}
        </div>
    );
};

const Instamart = () => {
    const [visibleSection, setVisibleSection] = useState(null); // Track the currently visible section

    const SetIsVisibleSection = (section) => {
        setVisibleSection((prevSection) => (prevSection === section ? null : section)); // Toggle the section
    };

    return (
        <div className="w-[70%] ml-52">
            <h1 className="font-bold text-2xl p-2 m-2">Instamart</h1> 
            <Section 
                title={"About Instamart"} 
                description={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."} 
                isVisible={visibleSection === "About Instamart"} // Check if this section is visible
                setIsVisible={() => SetIsVisibleSection("About Instamart")} // Toggle visibility
            />
            <Section 
                title={"Team Instamart"} 
                description={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."} 
                isVisible={visibleSection === "Team Instamart"}
                setIsVisible={() => SetIsVisibleSection("Team Instamart")}
            />
            <Section 
                title={"Careers"} 
                description={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."} 
                isVisible={visibleSection === "Careers"}
                setIsVisible={() => SetIsVisibleSection("Careers")}
            />
        </div>
    );
};

export default Instamart;
