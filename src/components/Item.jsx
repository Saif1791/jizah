import React from "react";
function Item({ item }) {
  return (
    <div className="image">
      <img
        src={item.image}
        alt={item.title}
        style={{
          width: "100%",
          height: "1000px",
          objectFit: "contain",
          objectPosition: "center",
        }}
      />
    </div>
  );
}

export default Item;
