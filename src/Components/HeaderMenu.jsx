import React from "react";
import Menus from "./Menus";
import ChangeModeBtn from "./ChangeModeBtn";
import MobileMenu from "./MobileMenu";

// import ChangeModeBtn from "./ChangeModeBtn";



function HeaderMenu() {
  return (
    <header className="rounded-b-md dark:bg-gray-700 dark:text-blue-100 drop-shadow-md container mx-auto text-slate-900 py-2 px-6 w-11/12 md:w-5/6">
      <nav className=" flex flex-wrap flex-row text-center items-center w-full justify-between">
        <div className="">
          <a href="" className="text-2xl font-semibold">
            Marlon
          </a>
        </div>

        <div className="text-base font-bold ml-5" id="nav-menu">
          <ul className="max-md:shadow-md max-md:hidden flex flex-row p-4">
            <Menus />
          </ul>
        </div>
        <div className="flex flex-row items-center space-x-2 dark:bg-gray-700">
          <ChangeModeBtn className="hidden max-md:flex" />
          <MobileMenu/>
        </div>
      </nav>
    </header>
  );
}

export default HeaderMenu;

{
  /* <li className="nav__item">
              <a href="#home" className="nav__link active">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#work" className="nav__link">
                Work
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                Contact
              </a>
            </li> */
}
