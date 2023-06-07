import React, { useState, useEffect } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

const Darkmode = () => {
  const [isDark, setisDark] = useState(false);

  const ToggoleDark = () => {
    setisDark(!isDark);
    
  };
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      
    } else {
      document.documentElement.classList.remove("dark");
    }
  });
    
    
    
  return (
   
      <div
        className="border p-1 rounded-full bg-transparent top-5 right-5 fixed cursor-pointer select-none text-xl "
        onClick={hendelDark}
      >
      {isDark ? <HiOutlineMoon /> : <HiOutlineSun />}
      </div>
    
  );
};

export default Darkmode;
