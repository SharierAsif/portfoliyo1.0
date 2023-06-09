import React from "react";
import Image from "../assets/image/perfil.png";
import { BsLinkedin, BsFacebook, BsGithub } from "react-icons/bs";
import { Typewriter } from "react-simple-typewriter";

function Home() {
  return (
    <div>
      <section className="dark:bg-gray-700 dark:text-blue-100 body-font px-8 py-4">
        <div className="container mx-auto flex md:flex-row flex-col items-center md:w-5/6 w-11/12">
          <div className="text-slate-900 text-4xl font-mono font-bold lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="my-4">
              Hi,
              <br />i am
              <span className="text-blue-600"> Marlon</span>
              <br />
              <div className="type">
                <Typewriter
                  words={["Eat", "Sleep", "Code", "Repeat!"]}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />

              </div>
            </h1>

            <div className="flex flex-col justify-center">
              <button className="hover:animate-pulse inline-flex text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                Contact
              </button>
            </div>
            <div className="text-2xl text-slate-900 hover:text-slate-800 grid grid-cols-3 gap-6 mt-12 ">
              <a href="" className="home__social-icon">
                <BsLinkedin />
              </a>
              <a href="" className="home__social-icon">
                <BsFacebook />
              </a>
              <a href="" className="home__social-icon">
                <BsGithub />
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={Image}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
