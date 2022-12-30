import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-div">
      <footer>
        <ul>
          <a href="https://github.com/mncole98" target="blank">
            <li>
              <FaGithub />
            </li>
          </a>
          <a href="https://www.linkedin.com" target="blank">
            <li>
              <FaLinkedin />
            </li>
          </a>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;