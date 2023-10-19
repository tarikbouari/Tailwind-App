import React from "react";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"

const Navbar = () => {
    return (
        <div className="text-white flex justify-between h-24 mx-auto px-4 items-center">
        <h1 className= " text-3xl font-bold text-[#00df9a]">REACT. </h1>
        <ul className= " flex hidden">
            <li className="p-4">About us</li>
            <li className="p-4">Work</li>
            <li className="p-4">Contact</li>
            <li className="p-4">Home</li>
        </ul>
        {/* mobile device list */}
  
        

         <AiOutlineMenu size={20}/>
         <div className="fixed left-0 top-0 w-[40%] h-full border-r-gray-900 bg-[#000300]">
         <h1 className= " text-3xl font-bold text-[#00df9a]">REACT. </h1>
            <ul className=" ">
                <li className="p-4">About us</li>
                <li className="p-4">Work</li>
                <li className="p-4">Contact</li>
                <li className="p-4">Home</li>
            </ul> 
         </div>
        
    </div>
    )
    
}

export default Navbar;