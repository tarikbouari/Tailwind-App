import React, { useState } from 'react';

const Newsletter = () => {
  const [formData, setFormData] = useState({ email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('this is dtaform', formData);
  };

  return (
    <div className=" bg-[#000300] ">
      <div className=" container w-full grid md:grid-cols-2  py-8 md:py-16">
        <div className="text-white px-2 ">
          <h2 className="text-xl sm:text-2xl md:text-3xl "> Want trick and tips to optimize your flow?</h2>
          <p> Sign up to our newsletter to stay up to date</p>
        </div>
        <div className="">

          <form className="flex flex-col md:flex-row gap-4  " onSubmit={handleSubmit}>
            <input
              className=" px-2 md:px-4 rounded"
              id="email"
              type="email"
              value={formData.email}
              name="email"
              placeholder="enter your email"
              onChange={handleChange}
            />
            <button type="submit" className=" rounded bg-[#00df9a] px-2  md:px-3 py-2"> Notify me</button>
          </form>

          <div className="pt-2">
            <p className="w-full text-white">
              we care about the protection of your data. read our
              <a href="www.google.com" className="text-[#00df9a]"> privacy policy</a>
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Newsletter;
