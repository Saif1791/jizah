import React from "react";

function Tagline(props) {
  return (
    <div className="tagLineContainer">
      <div>
        <h1 className="tagLine">
          <p>{props.Tagline}</p>
        </h1>
      </div>
    </div>
  );
}

export default Tagline;
