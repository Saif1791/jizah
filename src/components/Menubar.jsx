import React from "react";
import RollingMenu from "./RollingMenu";

function Menubar() {
  return (
    <div className="menuContainer">
      <RollingMenu name="Projects" />
      <RollingMenu name="Models" />
    </div>
  );
}

export default Menubar;
