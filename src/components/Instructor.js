import React from 'react';
import teach from '../images/profile/teacher.jpg';

const Instructor = () => (
  <div className="w-full bg-white py-[5rem]">
    <div className=" flex gap-4 p-4 w-[80%] mx-auto ">
      <img src={teach} alt="instructor " className=" w-50 rounded mb-4" />
      <div className="py-4 ">
        <h2 className=""> Become an Instructor</h2>
        <p className="mb-6 w-[80%] "> Instructors from around the world teach millions of learners on Udemy. We provide the tools and skills to teach what you love.</p>
        <span className="mt-4 px-2  py-3 bg-[#00df9a] rounded captitalize "> Start teaching </span>
      </div>
    </div>

  </div>
);

export default Instructor;
