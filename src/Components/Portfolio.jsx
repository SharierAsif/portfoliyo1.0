import React from "react";
import Works from "./Works";

function Portfolio() {
  return (
    <section className="bg-white text-slate-900 dark:bg-gray-700">
      <div className="container px-5 text-left mx-auto">
        <h1 className="text-2xl font-semibold text-blue-700 capitalize lg:text-3xl">
          Portfolio
        </h1>

        <p className="mt-4 text-slate-500 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam
          voluptatibus
        </p>

        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <Works/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
