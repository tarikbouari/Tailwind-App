import React from "react";
import arr from './DataReview'
import { useState } from "react";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
 


const Review = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    // This function is used to click the backward
    const prevSlide = () =>{
        // set isFirtSlide const to currentIndex which is 0
        const isFirstSlide = currentIndex === 0;
        // set condiction if it's the first slide decrement with array lenght else decrement currentIndex
        const newIndex =  isFirstSlide ? arr.length - 1 : currentIndex - 1;
        // update the state with setCurrentIndex
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === arr.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
            
    }

    return (
        <div className="w-full bg-[#f7f9fa] px-4 py-16 relative "> 
        {/* {arr.map( item => (
            <div key= {item.id} className=" mx-auto grid grid-cols-2 bg-white border  py-6 px-4 w-[50%] rounded">
                <div className="flex flex-col items-center justify-center ">
                    <h2 className="text-4xl">&ldquo;</h2>
                    <p>{item.text}</p>
                </div>
                <div className="flex flex-col p-4 ">
                <img src={item.photo} alt=" profile picture" className="rounded-full w-[100px] h-[100px] mx-auto " />
                    <div className=" flex flex-col items-center ">
                        <h4 className=""> {item.nom}</h4>
                        <p className="mb-0  text-[#00df9a] " > {item.profession} </p>
                        <p className=" "> {item.city} </p>
                    </div>
                   
                </div>
            </div> 
        ))} */}

        {
         <div key= {arr[currentIndex].id} className=" mx-auto md:grid grid-cols-2 bg-white border  py-6 px-4 md:w-[50%] rounded">
         <div className="flex flex-col items-center justify-center ">
             <h2 className="text-4xl">&ldquo;</h2>
             <p>{arr[currentIndex].text}</p>
         </div>
         <div className="flex flex-col p-4 ">
         <img src={arr[currentIndex].photo} alt=" profile picture" className="rounded-full w-[100px] h-[100px] mx-auto " />
             <div className=" flex flex-col items-center ">
                 <h4 className=""> {arr[currentIndex].nom}</h4>
                 <p className="mb-0  text-[#00df9a] " > {arr[currentIndex].profession} </p>
                 <p className=" "> {arr[currentIndex].city} </p>
             </div>
            
         </div>
        
     </div> 
        
        }
          <div  onClick={prevSlide} className=" absolute top-[50%] translate-x-0 translate-y-[50%] md:left-[20rem] cusor-pointer " >
            <BsFillArrowLeftCircleFill  size={30} />
        </div>
        <div onClick={nextSlide} className="absolute top-[50%] translate-x-0 translate-y-[50%]  md:right-[20rem] cusor-pointer" >
            <BsFillArrowRightCircleFill size={30}  />
        </div>
       
        </div>
    )
}

export default Review;