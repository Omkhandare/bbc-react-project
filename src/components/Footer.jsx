import "./Footer.css";
import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer">
        {/* LEFT COLUMN */}
        <div className="footer-col">
          <h4>Our Office</h4>

          <div className="footer-item">
            <i className="fa-solid fa-location-dot footer-icon"></i>
            <p>BBC IVF Gut No 235, Khandi Pimpalgaon, Tal-Khultabad, Dist-Sambhaji Nagar</p>
          </div>

          <div className="footer-item">
            <i className="fa-solid fa-phone footer-icon"></i>
            <p>+91 7741035079</p>
          </div>

          <div className="footer-item">
            <i className="fa-solid fa-envelope footer-icon"></i>
            <p>bhadrabreedingcenter@gmail.com</p>
          </div>
        </div>

        {/* MIDDLE COLUMN */}
        <div className="footer-col footer-links">
          <h4>Quick Links</h4>

          <p>
            <i className="fa-solid fa-angle-right link-icon"></i> About Us
          </p>
          <p>
            <i className="fa-solid fa-angle-right link-icon"></i> Contact Us
          </p>
          <p>
            <i className="fa-solid fa-angle-right link-icon"></i> Services
          </p>
          <p>
            <i className="fa-solid fa-angle-right link-icon"></i> Products
          </p>
        </div>

        {/* RIGHT COLUMN (SOCIAL ICONS) */}
        <div className="footer-col footer-social">
          <div className="social-icons">
            <a href="/" className="social-circle">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="/" className="social-circle">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="/" className="social-circle">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="/" className="social-circle">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="/" className="social-circle">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </footer>

      {/* COPYRIGHT */}
      <div className="copyright">
        © Bhadra Breeding Center, All Right Reserved.Designed By Sculptor Tech Pvt Ltd
      </div>
    </>
  );
}

export default Footer;
