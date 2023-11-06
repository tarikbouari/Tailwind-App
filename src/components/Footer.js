import React from 'react';

const Footer = () => (
  <div className="bg-[#000300] w-full py-[5rem]">
    <div className="container grid grid-cols-3 text-white">
      <div className="flex flex-col gap-2">
        <span> Icourse Business</span>
        <span> teach on Icourse</span>
        <span> About us</span>
        <span> Contact us</span>
      </div>
      <div className="flex flex-col gap-2">
        <span> Carees</span>
        <span> Blog</span>
        <span>Help and support</span>
        <span> Investor</span>
      </div>
      <div className="flex flex-col gap-2">
        <span> Terms    </span>
        <span> Privacy policy</span>
        <span> Site Map</span>
        <span>Cookies settings</span>
      </div>

    </div>
    <div className="container mt-5 flex justify-between">
      <span className=" text-3xl text-[#00df9a] ">Icourse</span>
      <span className="text-white">  &copy;  2023 icourse, inc</span>
    </div>
  </div>
);

export default Footer;
