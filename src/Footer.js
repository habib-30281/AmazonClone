import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <h3>HITEC 6th Semester Project</h3>
        <p>
          <ul>
            <li>
              "Life is a journey of continuous learning, where every experience
              and encounter has the potential to teach us something new."
            </li>
            
          </ul>
        </p>
        <ul className="socials">
          <li>
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-google-plus"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-youtube"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-linkedin-square"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} <a href="#">Habibullah</a>
        </p>
        <div className="footer-menu">
          <ul className="f-menu">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
