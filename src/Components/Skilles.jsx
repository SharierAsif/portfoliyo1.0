import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { SiCss3, SiJavascript, SiApache } from "react-icons/si";

function Skilles() {
  return (
    <div className="m-auto md:w-5/6 w-11/12 px-8 py-4">
      <div className="flex flex-col">
        <h4 className="mb-10 text-2xl font-extrabold leading-8 tracking-tight text-blue-700 sm:leading-9">
          Skills
        </h4>
        <div className="grid grid-cols-2 gap-8 text-slate-900">
          <div className="">
            <h2 className="text-lg font-semibold mb-6 ">Profesional Skills</h2>
            <p class="skills__text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
              optio id vero amet, alias architecto consectetur error eum eaque
              sit.
            </p>
          </div>
          <div className="text-slate-900">
            <div className="mb-6">
              <div className="flex flex-row items-center mb-2">
                <AiFillHtml5 className="text-2xl text-orange-600" />
                <span class="ml-2 text-lg font-semibold ">HTML5</span>
              </div>
              <progress
                className="progress progress-accent w-full h-2"
                value="70"
                max="100"
              ></progress>
            </div>
            <div className="mb-6">
              <div className="flex flex-row items-center mb-2">
                <SiCss3 className="text-2xl text-sky-600" />
                <span class="ml-2 text-lg font-semibold ">CSS3</span>
              </div>
              <progress
                className="progress progress-accent w-full h-2"
                value="70"
                max="100"
              ></progress>
            </div>
            <div className="mb-6">
              <div className="flex flex-row items-center mb-2">
                <SiJavascript className="text-2xl text-yellow-500" />
                <span class="ml-2 text-lg font-semibold ">JAVA SCRIPT</span>
              </div>
              <progress
                className="progress progress-accent w-full h-2"
                value="70"
                max="100"
              ></progress>
            </div>
            <div className="mb-6">
              <div className="flex flex-row items-center mb-2">
                <SiApache className="text-2xl text-indigo-600" />
                <span class="ml-2 text-lg font-semibold ">UL/XI</span>
              </div>
              <progress
                className="progress progress-accent w-full h-2"
                value="70"
                max="100"
              ></progress>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skilles;
