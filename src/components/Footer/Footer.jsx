import React from "react";
import { Link } from "react-router";
import { BsTwitterX } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-[#001931] text-base-content rounded p-10">
        <nav className="grid grid-flow-col gap-4">
          <Link to="/" className="link link-hover text-white">
            Home
          </Link>
          <Link to="/Apps" className="link link-hover text-white">
            Apps
          </Link>
          <Link to="/Installation" className="link link-hover text-white">
            Installation
          </Link>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4 text-white">
            <a className="text-white" href="https://www.x.com" target="_blank">
              <BsTwitterX size={24} />
            </a>
            <a
              className="text-white"
              href="https://www.youtube.com"
              target="_blank"
            >
              <FaYoutube size={24} />
            </a>
            <a
              className="text-white"
              href="https://www.facebook.com"
              target="_blank"
            >
              <ImFacebook2 size={24} />
            </a>
          </div>
        </nav>
        <aside>
          <p className="text-white">
            Copyright © {new Date().getFullYear()} - All right reserved by
            Hero.IO Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
