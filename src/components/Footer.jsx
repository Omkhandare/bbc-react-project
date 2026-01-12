import "./Footer.css";
import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div>
          <h4>Our Office</h4>
          <p>BBC IVF Gut No 235, Khandi Pimpalgaon...</p>
          <p>+91 7741035079</p>
          <p>bhadrabreedingcenter@gmail.com</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Services</p>
          <p>Products</p>
        </div>
      </footer>

      {/* COPYRIGHT (unchanged) */}
      <div className="copyright py-4">
        © 2026 <span className="fw-semi-bold">Bhadra Breeding Centre</span>. All
        Rights Reserved.
      </div>
    </>
  );
}

export default Footer;

