import React from 'react';
import Typed from 'react-typed';
// react typed animations packages
const Banner = () => (
  <div className="container md:flex  w-full p-8 text-white bg-[#fafafa] ">
    <div className="i p-4 text-black ">
      <h1 className="text-5xl mb-5 font-bold text-[#00df9a]">
        <Typed
          strings={['Learn remotely with I.COURSE']}
          typeSpeed={40} // Adjust the typing speed in milliseconds
          backSpeed={20}
        />
      </h1>
      <div className="md:flex">
        <h2 className=" mb-4 md:mb-5 md:text-3xl">
          {' '}
          Fast and flexible schedule for
          <Typed
            className="text-2xl mx-2 md:text-3xl"
            strings={['Student', 'Business', 'Employee']}
            typeSpeed={40} // Adjust the typing speed in milliseconds
            backSpeed={20}
          />
        </h2>
        <Typed
          className=" hidden text-2xl mx-2 md:text-3xl"
          strings={['Student', 'Business', 'Employee']}
        />
      </div>

      <p className="mb-5 md:w-[70%] ">
        Get your team in sync, no matter your location Streamline processes. Get acess to more
        than 500+ courses.
      </p>
      <span className="bg-[#00df9a] p-3 rounded "> Learn More</span>
      <div className="mt-5 icon-logo " />
    </div>

    <div className="hidden md:block bg" />

  </div>

);

export default Banner;
