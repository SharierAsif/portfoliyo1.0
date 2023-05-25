import React, { useState } from "react";
import Hamburger from "hamburger-react";
import Menus from "./Menus";

function NavBar() {
  const [isOpen, setOpen] = useState(false);
  const handleHamburgMenu = () => {
    console.log("clicked me");
  };
  return (
    <div className="">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-row justify-between items-start md:items-center shadow-sm ">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Tailblocks</span>
          </a>
          <nav className="hidden md:ml-auto md:flex flex-wrap items-center text-base justify-center">
            {/* <a className="mr-5 hover:text-gray-900">Home</a>
            <a className="mr-5 hover:text-gray-900">About</a>
            <a className="mr-5 hover:text-gray-900">Portfolio</a>
            <a className="mr-5 hover:text-gray-900">Contact</a> */}
            <Menus/>
          </nav>
          <Hamburger
            className=" ml-auto flex flex-wrap justify-end text-right"
            toggled={isOpen}
            toggle={setOpen}
            size="22"
          />
        </div>
      </header>
    </div>
  );
}

export default NavBar;
