import React from "react";
import { ContactDetails } from "./ContactDetails";
function footer() {
  var year = new Date().getFullYear();
  return (
    <div className="footerContainer">
      <div className="footerLeft">
        <div className="brandContainer">
          <h1 className="footerBrandName">JA</h1>
          <p>Lorem Ipsum</p>
        </div>
        <div className="copyright">
          <p> &copy; {year} Jiza Architects </p>
        </div>
      </div>
      <ContactDetails />
      <div className="copyright mobile">
        <p> &copy; {year} Jiza Architects </p>
      </div>
    </div>
  );
}

export default footer;
