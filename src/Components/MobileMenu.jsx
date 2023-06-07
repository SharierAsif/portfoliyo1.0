import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Menus from "./Menus";
import ChangeModeBtn from "./ChangeModeBtn";


let bar = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 9h16.5m-16.5 6.75h16.5"
    />
  </svg>
);

function Example() {
  const [openMenu, setOpenMenu] = React.useState(false);

  const ToggleMenu = () => {
    setOpenMenu(!openMenu);
    var element = document.getElementById("mobileMenu");
    openMenu
      ? element.classList.remove("hidden")
      : element.classList.add("hidden");
  };

  const openMenuHandle = () => {
    element.classList.remove("hidden");
  };
  const closeMenu = () => {
    var element = document.getElementById("mobileMenu");
    element.classList.add("hidden")
    console.log("close")
  };

  return (
    <div className="dark:bg-gray-700">
      
      <div onClick={ToggleMenu} className="hidden max-md:flex relative">
        {bar}
      </div>
      <div
        id="mobileMenu"
        className="hidden dark:bg-gray-700 transition container mx-auto w-3/5 md: absolute overflow-hidden shadow-md z-50 bg-opacity-90 bg-white p-4 -right-5 top-12"
      >
        <XMarkIcon onClick={closeMenu} className="h-6 w-6" />
        {/* <ChangeModeBtn/> */}
        <Menus/>
        
      </div>
    </div>
  );
}
export default Example;
