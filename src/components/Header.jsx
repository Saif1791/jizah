import React, { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import NavMenu from "./NavMenu";
import classNames from "./classNames";

function Header() {
  const [clicked, isClicked] = useState(false);
  function updateClick() {
    isClicked(!clicked);
  }

  return (
    <div className="navbarContainer">
      <div className="headerContainer">
        <h1 className="brandName">JA</h1>
        <div className={classNames("ham", clicked && "selected")}>
          <Hamburger
            rounded
            color="black"
            size={32}
            duration={0.8}
            distance="sm"
            toggled={clicked}
            toggle={updateClick}
            direction="left"
          />
        </div>
      </div>
      {clicked ? <NavMenu /> : null}
    </div>
  );
}

export default Header;
