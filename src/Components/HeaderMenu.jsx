import React from "react";

function HeaderMenu() {
  return (
    <header class=" container mx-auto text-slate-900 py-4 px-6 w-11/12 md:w-5/6">
      <nav class="sticky flex flex-wrap flex-row text-center items-center w-full justify-between">
        <div className="">
          <a href="" class="text-2xl font-semibold">
            Marlon
          </a>
        </div>

        <div class="text-base font-bold ml-5" id="nav-menu">
          <ul class="flex flex-wrap flex-row gap-4">
            <li class="nav__item">
              <a href="#home" class="nav__link active">
                Home
              </a>
            </li>
            <li class="nav__item">
              <a href="#about" class="nav__link">
                About
              </a>
            </li>
            <li class="nav__item">
              <a href="#skills" class="nav__link">
                Skills
              </a>
            </li>
            <li class="nav__item">
              <a href="#work" class="nav__link">
                Work
              </a>
            </li>
            <li class="nav__item">
              <a href="#contact" class="nav__link">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* <div class="nav__toggle" id="nav-toggle">
          <i class="bx bx-menu"></i>
        </div> */}
      </nav>
    </header>
  );
}

export default HeaderMenu;
