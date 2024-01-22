import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGit,
  FaGithub,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import "../../Css/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <h2>BLOG IT</h2>
        </div>
        <div className="social-links">
          <a
            href="https://www.instagram.com/saranshsinhaa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.twitter.com/saranshsinhaa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/saranshsinhaa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.github.com/saranshsinhaa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
        <div className="social-links">
          <a
            href="mailto:saranshsinha084@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://wa.me/919651495279"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPhone />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
