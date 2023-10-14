import React from "react";

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

      <div className="footerRight">
        <div className="contactDetails up">
          <p>Lorem Ipsum</p>
          <p>loremipsum@mail.com</p>
          <p>+91 1234567890</p>
        </div>
        <div className="contactDetails down">
          <p>Lorem Ipsum</p>
          <p>loremipsum@mail.com</p>
          <p>+91 1234567890</p>
        </div>
      </div>
      <div className="copyright mobile">
        <p> &copy; {year} Jiza Architects </p>
      </div>
    </div>
  );
}

export default footer;
