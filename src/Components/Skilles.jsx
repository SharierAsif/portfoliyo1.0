import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { SiCss3, SiJavascript, SiApache } from "react-icons/si";

function Skilles() {
  return (
    <div className="m-auto md:w-5/6 w-11/12 px-8 py-10">
      <div className="flex flex-col">
        <h4 className="mb-10 text-2xl font-extrabold leading-8 tracking-tight text-blue-700 sm:leading-9">
          Skills
        </h4>
        <div className="grid max-md:grid-cols-1 grid-cols-2 gap-8 text-slate-900">
          <div className="m-auto text-center">
            <h2 className="text-3xl font-semibold mb-6 ">Profesional Skills</h2>
            <p className="skills__text dark:text-blue-100">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
              optio id vero amet, alias architecto consectetur error eum eaque
              sit.
            </p>
          </div>
          <div className=" m-auto items-center justify-center  flex flex-row max-md:flex-col space-x-4 text-slate-900 dark:bg-gray-700 dark:text-blue-100">
            <div className="m-auto text-center grid grid-cols-2 gap-14 p-6">
              <div className="mb-6">
                <div className="flex flex-col items-center mb-2">
                  <AiFillHtml5 className="text-2xl text-orange-600" />
                  <span className="ml-2 text-lg font-semibold ">HTML5</span>
                </div>
                <div className="radial-progress text-orange-600" style={{ "--value": 70 }}>
                  70%
                </div>
              </div>
              <div className="mb-6">
                <div className="flex flex-col items-center mb-2">
                  <SiCss3 className="text-2xl text-sky-600" />
                  <span className="ml-2 text-lg font-semibold ">CSS3</span>
                </div>
                <div className="radial-progress text-sky-600" style={{ "--value": 70 }}>
                  70%
                </div>
              </div>
              <div className="mb-6">
                <div className="flex flex-col items-center mb-2">
                  <SiJavascript className="text-2xl text-yellow-500" />
                  <span className="ml-2 text-lg font-semibold ">JS</span>
                </div>
                <div className="radial-progress text-yellow-500" style={{ "--value": 70 }}>
                  70%
                </div>
              </div>
              <div className="mb-6">
                <div className="flex flex-col items-center mb-2">
                  <SiApache className="text-2xl text-indigo-600" />
                  <span className="ml-2 text-lg font-semibold ">UL/XI</span>
                </div>
                <div className="radial-progress text-indigo-600" style={{ "--value": 70 }}>
                  70%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skilles;
