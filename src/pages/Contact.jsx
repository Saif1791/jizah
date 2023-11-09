import React from "react";
import Header from "../components/Header";
import Tagline from "../components/Tagline";
import Footer from "../components/Footer";

function Contact() {
  return (
    <section className="ContactPage">
      <div>
        <Header />
        <Tagline
          Tagline={
            <div>
              Want us to design your dream home? <br /> Get in Touch!
            </div>
          }
        />
        <div className="mapContainer">
          <iframe 
            className="map"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62280.89641793412!2d78.58084021878143!3d12.67708931953837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bada9a399f60b0d%3A0x8ace6dc0bad6c5cc!2sVaniyambadi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1699523724297!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <Footer className="contactFooter" />
      </div>
    </section>
  );
}

export default Contact;
