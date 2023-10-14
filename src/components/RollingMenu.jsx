import React from "react";
function RollingMenu(props) {
  return (
    <div className="scroll-link">
      <span className="link-text">
        <a href="">{props.name}</a>
      </span>
      <div className="scroll-content">
        <p>
          <a href="">{props.name}</a>
        </p>
      </div>
    </div>
  );
}

export default RollingMenu;
