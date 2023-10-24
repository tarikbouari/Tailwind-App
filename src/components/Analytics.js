import React from "react";
import scree from '../images/data.jpg'

const Analytic = () => {
    return (
        <div className="container grid md:grid-cols-2 p-8">
            <img src={scree}  className=" md:w-[400px] w-[350px] mx-auto py-2 " alt="analytic screen"  />
            <div className="md:flex flex-col justify-center">
                <h4 className=" text-[#00df9a] " > DATA ANALYTICS COURSE </h4>
                <h2 className="text-2xl md:text-4xl sm:text-3xl  capitalize py-1 font-bold "> Manage data analytic centrally</h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                     quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate .   
                </p>
                <button className=" p-[0.7rem] rounded bg-[#00df9a] text-black md:self-start " >Get started </button>
            </div>
        </div>
    )
}
export default Analytic;