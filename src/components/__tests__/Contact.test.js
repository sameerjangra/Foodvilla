import { render ,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"

test("Should load Contact Us Component",()=>{
    render(<Contact />);

   const heading = screen.getByRole("button");
    expect(heading).toBeInTheDocument();
    
})

test("Should load Contact Us Component",()=>{
    render(<Contact />);

   const text = screen.getByText("Name");

    expect(text).toBeInTheDocument();
    
})

test("Should the length of textbox is 5 or not",()=>{
    render(<Contact />);

   const text = screen.getAllByRole("textbox");

    expect(text.length).toBe(4)
    
})


test("Should the placeholder correct or not",()=>{
    render(<Contact />);

   const text = screen.getByPlaceholderText("Enter your phone number")

    expect(text).toBeInTheDocument();
    
})

