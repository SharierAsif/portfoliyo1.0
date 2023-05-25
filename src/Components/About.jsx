import React from "react";
import Img from "../assets/image/about.jpg";

function About() {
  return (
    <div className="m-auto md:w-5/6 w-11/12 px-8 py-4">
      <div className="flex flex-col">
        <h4 className="mb-10 text-2xl font-extrabold leading-8 tracking-tight text-blue-700 sm:leading-9">
          About
        </h4>
        <div className="grid grid-cols-2 gap-8">
          <div className="max-w-xs m-auto">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={Img}
            />
          </div>
          <div className="">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate cum expedita quo culpa tempora, assumenda, quis fugiat
              ut voluptates soluta, aut earum nemo recusandae cumque
              perferendis! Recusandae alias accusamus atque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
