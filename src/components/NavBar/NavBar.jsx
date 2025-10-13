import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import { FaGithub } from "react-icons/fa";
import "./NavBar.css";

const NavBar = () => {
  const links = (
    <>
      <NavLink to="/">
        <li className="m-2 font-medium">Home</li>
      </NavLink>
      <NavLink to="/Apps">
        <li className="m-2 font-medium">Apps</li>
      </NavLink>
      <NavLink to="/Installation">
        <li className="m-2 font-medium">Installation</li>
      </NavLink>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/">
            <div className="ml-1 font-bold text-base flex justify-center items-center">
              <img className="w-10" src={logo} alt="" />
              <h5 className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                HERO.IO
              </h5>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <Link to="https://github.com/sadtafhim/Assignment8-Hero-Apps">
            <button className="btn border border-[#632EE3] text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
              <FaGithub /> Contribute
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
