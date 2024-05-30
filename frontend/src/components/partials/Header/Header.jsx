import React, { useState } from "react";
import { FiAlignRight, FiMinimize } from "react-icons/fi";
import Content from "../Content/Content";
const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div className="text-white h-10vh flex justify-between z-50 lg:py-5 px-20 py-4 transition-opacity duration-1000 ease-in-out">
      <div className="flex items-center flex-1">
        <span className="text-3xl font-bold">LOGO</span>
      </div>
      <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden opacity-0 md:opacity-100">
        <div className="flex-10">
          <ul className="flex gap-8 mr-16 text-[18px]">
            <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
              Home
            </li>
            <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
              About
            </li>
            <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
      </div>
      <div>{click && <Content/>}</div>
      <button className="block md:hidden transition duration-500 ease-in-out" onClick={handleClick}>
        {click ? <FiMinimize />:<FiAlignRight />}
      </button>
    </div>
  );
};

export default Header;
