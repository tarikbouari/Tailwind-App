import React from "react";

const Newsletter = () => {
    return (
        <div className=" bg-[#000300] " > 
            <div className=" container w-full grid md:grid-cols-2  py-8 md:py-16" > 
            <div className="text-white px-2 " >
                    <h2 className="text-xl sm:text-2xl md:text-3xl " > Want trick and tips to optimize your flow?</h2>
                    <p> Sign up to our newsletter to stay up to date</p>
                </div>
                <div className="" >
                    <div className="flex flex-col md:flex-row gap-4  " >
                        <input className=" px-2 md:px-4 rounded" type="text" placeholder="enter your email"/>
                        <button className=" rounded bg-[#00df9a] px-2  md:px-3 py-2"> Notify me</button>
                    </div>
                    <div className=" text-white py-4" > 
                        <p className="w-full" > we care about the protection of your data. read our
                        <a className="text-[#00df9a]" > privacy policy</a>
                        </p>
                        
                    </div>
                    
                </div>

            </div>
                
           
    </div>
    )
    
}

export default Newsletter;