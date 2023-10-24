import React from "react";
import { useState } from "react";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"

const Navbar = () => {

    // useState is used internally for interative action 
    // for example in this case we want to make a click event on the menu icon
    // so we need to define the initial state and write a function to handle the action 
    
    // Here we declare the state with a destructing array
    const [nav, setNav] = useState(true);
    const handleNav = () => {
        setNav(!nav);
    }

    return (
        // nav container
        <div className=" container text-white flex justify-between mx-w-[1024px] bg-[#fafafa] h-24 mx-auto px-4 items-center">
        
         {/* desktop  menu */}
        <h1 className="text-3xl font-bold text-[#00df9a]">I.COURSE </h1>
        {/* desktop navigation is hidden */}
        <ul className=" hidden md:flex justify-center items-center text-black">
            <li className="p-4">About us</li>
            <li className="p-4">Work</li>
            <li className="p-4">Contact</li>
            <li className="p-4">Home</li>
            <li className=" rounded p-2 bg-[#00df9a] ">Get Started</li>
        </ul>

        {/* mobile device menu */}
        {/* md in tailwind css is equivalent to min-width(above 768):768px */}
        <div onClick={handleNav} className="block md:hidden text-black">
            
            {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} /> }
        </div>
            {/* we use a conditional rendering to display the navigation list when the menu icon is clicked*/ }
         <div className= { !nav ? "  fixed left-0 top-0 w-[50%] h-full border-r-gray-900 bg-[#000300] ease-in-out duration-500" : 'fixed left-[-100%]' }>
         
            <h1 className= " text-3xl font-bold text-[#00df9a] m-4">I.COURSE </h1>
            <ul className="uppercase px-0">
                <li className="p-4 border-b border-gray-100">Home</li>
                <li className="p-4 border-b border-gray-100">About us</li>
                <li className="p-4 border-b border-gray-100">Work</li>
                <li className="p-4 border-b border-gray-100">Contact</li>
                
               
            </ul> 
         </div>
        
    </div>
    )
    
}

export default Navbar;