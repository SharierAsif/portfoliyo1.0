import React from "react";

function singleMenu({title, link}) {
  return (
    <li className="flex flex-col md:flex-row">
      <a href={link} className="border-b p-1 m-1 cursor-pointer border-transparent hover:border-blue-600">
        {title}
        
      </a>
    </li>
  );
}

export default singleMenu;
