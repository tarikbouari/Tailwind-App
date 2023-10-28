import React from "react";
import single from "../images/single.png";
import double from "../images/two.png";
import triple from "../images/group.png"

const Card = () => {
    return (
        <div className="bg-white w-full mx-auto" >
            <div className= "max-w-[1240px] container gap-20  grid md:grid-cols-3 md:gap-10 py-[12rem] " > 
                <div className="  shadow-xl  py-8 text-center py-[7rem] rounded-lg hover:scale-105 duration-300 ">
                    <img src={single} alt="" className=" w-[100px] mx-auto mt-[-10rem]" />
                    <h2 className=" text-2xl md: text-3xl py-3" > Single user</h2>
                    <p className="md:text-4xl font-bold "> 150$</p>
                    <div className="pt-3 px-4">
                        <p className="border-b border-gray-200 " > 500GB storage</p>
                        <p className="border-b border-gray-200 ">  1 User Allowed</p>
                        <p className="border-b border-gray-200 "> Send up to 2GB</p>
                    </div>
                    <button className="bg-[#00df9a] mt-4 px-10 py-2 rounded md: text-xl" > start Trial </button>
                </div>
                <div className="  shadow-xl bg-[#d3d7d7] py-8 text-center py-[7rem] rounded-lg hover:scale-105 duration-300 ">
                    <img src={double} alt="" className=" w-[100px] mx-auto mt-[-10rem]" />
                    <h2 className=" text-2xl md: text-3xl py-3" > Single user</h2>
                    <p className="md:text-4xl font-bold "> 350$</p>
                    <div className="pt-3 px-4">
                        <p className="border-b border-gray-200 " > 1T storage</p>
                        <p className="border-b border-gray-200 ">  5 Users Allowed</p>
                        <p className="border-b border-gray-200 "> Send up to 2GB</p>
                    </div>
                    <button className=" bg-[#000300] text-[#00df9a] mt-4 px-10 py-2 rounded md: text-xl" > start Trial </button>
                </div>
                <div className="  shadow-xl py-8 text-center py-[7rem] rounded-lg hover:scale-105 duration-300 ">
                    <img src={triple} alt="" className=" w-[100px] mx-auto mt-[-10rem]" />
                    <h2 className=" text-2xl md: text-3xl py-3" > Single user</h2>
                    <p className="md:text-4xl font-bold "> 600$</p>
                    <div className="pt-3 px-4">
                        <p className="border-b border-gray-200 " > 5T storage</p>
                        <p className="border-b border-gray-200 "> 20 Users Allowed</p>
                        <p className="border-b border-gray-200 "> Send up to 1T</p>
                    </div>
                    <button className="  bg-[#00df9a] mt-4 px-10 py-2 rounded md: text-xl" > start Trial </button>
                </div>
                
                
            </div>

        </div>
    )
};

export default Card;