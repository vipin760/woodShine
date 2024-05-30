import React from "react";
import DarkButton from "../DarkButton/DarkButton";
const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "About", link: "/#" },
  { id: 3, name: "Service", link: "/#" },
  { id: 4, name: "Blogger", link: "/#" },
  { id: 5, name: "Contact", link: "/#" },
  { id: 6, name: "Product", link: "/#" },
];
const DropDown = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "About", link: "/#" },
  { id: 3, name: "Service", link: "/#" },
  { id: 4, name: "Blogger", link: "/#" },
  { id: 5, name: "Contact", link: "/#" },
  { id: 6, name: "Product", link: "/#" },
];

const Header = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-600 relative z-40">
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img
                className="w-9 uppercase"
                src="https://cdn.pixabay.com/photo/2017/05/31/16/39/windows-2360920_640.png"
                alt=""
              />
              SHOPFY
            </a>
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="group relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search Here...."
                className="w-[200px] sm:w-[200px] py-1 px-2 rounded-full group-hover:w-[300px] transition-all duration-300 focus:outline-none focus:border-1 focus:border-primary "
              />
              <i className="fas fa-search -translate-x-1 top-1/4 right-2 absolute "></i>
            </div>
            <button
              onClick={() => alert("oder is not avilable yet")}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-300 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-300">
                order
              </span>
              <i className="fas fa-cart-plus text-xl text-white drop-shadow-sm cursor-pointer"></i>
            </button>
            <DarkButton></DarkButton>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center ">
          {Menu.map((data)=>(
            <li key={data.id} className="inline-block px-4 hover:text-orange-500 duration-300 font-bold">
              <a href={data.link}>{data.name}</a>
            </li>
          ))}
          <li className="inline-block px-4 duration-300 font-bold group relative cursor-pointer">
            <a href="">Trending <i className="fas fa-caret-down transition-all duration-200 group-hover:rotate-180"></i></a>
            <div className="absolute z-[9999] hidden group-hover:block">
              <ul className="flex flex-col justify-center">
            {DropDown.map((data)=>(
              <li className="hover:text-orange-500 " key={data.id}>
                <a href="" className="inline-block w-full hover:bg-orange-300 rounded-md hover:text-white transition-all duration-600 p-2">{data.name}</a>
              </li>
            ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
