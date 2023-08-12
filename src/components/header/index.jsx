import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Header() {
  return (
    <div className="bg-black text-white h-20  flex justify-between items-center">
      <div className="container flex  items-center justify-center mx-auto">
        <nav>
          <ul className="flex justify-center space-x-10 ">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex space-x-5 mr-12">
        <div className="mr-3">
          <a
            href="https://www.linkedin.com/in/ersinydnn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
        <div className="mr-5">
          <a
            href="https://github.com/ersinydnn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
