import React from "react";
import SingleMenu from "./SingleMenu";
import MenuData from "../Components/data/MenuData";
import ChangeModeBtn from "./ChangeModeBtn";



function Menus() {
  return (
    <>
      {MenuData.map((menu) => (
        <SingleMenu
          key={menu.title}
          title={menu.title}
          link={menu.link}
        ></SingleMenu>
      ))}
      {MenuData.title}
    </>
  );
}

export default Menus;
