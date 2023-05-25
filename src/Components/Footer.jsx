import React from "react";


function Footer() {
  return (
    <div className="bg-blue-800 text-slate-200 text-center font-semibold items-center justify-center rounded-t-lg p-5 mt-12 text-xs md:text-base">
      <a href="#hero" className="">
        Shahrier Asif <br/>
      </a>
      <a href="mailto:sharier369@gmail.com" className="cursor-pointer">sharier369@gmail.com</a>
      <p>@Shahrier Asif {new Date().getFullYear()}. All right researved</p>
    </div>
  );
}

export default Footer;
